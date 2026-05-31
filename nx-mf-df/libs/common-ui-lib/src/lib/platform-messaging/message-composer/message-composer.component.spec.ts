import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HOST_BRIDGE_TOKEN } from '@lkovari/microfrontend-platform-communication/angular';
import { MessageService } from 'primeng/api';

import { BROADCAST_TARGET_VALUE } from '../message-options';
import { MessageSenderService } from '../services/message-sender.service';
import { RemotePlatformBusService } from '../services/remote-platform-bus.service';
import { MessageComposerComponent } from './message-composer.component';

describe('MessageComposerComponent', () => {
  let fixture: ComponentFixture<MessageComposerComponent>;
  let messageServiceAdd: ReturnType<typeof vi.fn>;
  let trySend: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    messageServiceAdd = vi.fn();
    trySend = vi.fn().mockReturnValue({ accepted: true });
    await TestBed.configureTestingModule({
      imports: [MessageComposerComponent],
      providers: [
        MessageSenderService,
        RemotePlatformBusService,
        { provide: MessageService, useValue: { add: messageServiceAdd } },
        {
          provide: HOST_BRIDGE_TOKEN,
          useValue: { tryPublish: trySend },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageComposerComponent);
    fixture.componentRef.setInput('currentAppId', 'main-host');
    fixture.componentRef.setInput('bridgeAvailable', true);
    await fixture.whenStable();
  });

  it('should create with source prefilled from currentAppId', () => {
    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance['form'].get('source')?.value).toBe(
      'main-host',
    );
  });

  it('does not submit when bridge is unavailable', () => {
    fixture.componentRef.setInput('bridgeAvailable', false);
    fixture.detectChanges();
    fixture.componentInstance['submit']();
    expect(trySend).not.toHaveBeenCalled();
  });

  it('does not submit when form is invalid', () => {
    fixture.componentInstance['form'].patchValue({ title: '' });
    fixture.componentInstance['submit']();
    expect(trySend).not.toHaveBeenCalled();
  });

  it('maps broadcast target to undefined and sends message', () => {
    const dismissSpy = vi.fn();
    fixture.componentInstance.dismiss.subscribe(dismissSpy);
    fixture.componentInstance['form'].patchValue({
      source: 'main-host',
      title: 'Hello',
      body: 'World',
      target: BROADCAST_TARGET_VALUE,
      sensitivity: 'public',
      severity: 'info',
    });
    fixture.componentInstance['submit']();
    expect(trySend).toHaveBeenCalledOnce();
    const message = trySend.mock.calls[0]?.[0];
    expect('target' in message).toBe(false);
    expect(messageServiceAdd).toHaveBeenCalledWith(
      expect.objectContaining({ severity: 'success', summary: 'Message sent' }),
    );
    expect(dismissSpy).toHaveBeenCalledOnce();
  });

  it('shows error when send returns null', () => {
    trySend.mockReturnValue(null);
    fixture.componentInstance['form'].patchValue({
      source: 'main-host',
      title: 'Hello',
      body: 'World',
      target: BROADCAST_TARGET_VALUE,
      sensitivity: 'public',
      severity: 'info',
    });
    fixture.componentInstance['submit']();
    expect(messageServiceAdd).toHaveBeenCalledWith(
      expect.objectContaining({
        severity: 'error',
        summary: 'Send failed',
      }),
    );
  });

  it('shows error when message is rejected', () => {
    trySend.mockReturnValue({ accepted: false, message: 'denied' });
    fixture.componentInstance['form'].patchValue({
      source: 'main-host',
      title: 'Hello',
      body: 'World',
      target: BROADCAST_TARGET_VALUE,
      sensitivity: 'public',
      severity: 'info',
    });
    fixture.componentInstance['submit']();
    expect(messageServiceAdd).toHaveBeenCalledWith(
      expect.objectContaining({
        severity: 'error',
        summary: 'Message rejected',
        detail: 'denied',
      }),
    );
  });

  it('emits dismiss on cancel', () => {
    const dismissSpy = vi.fn();
    fixture.componentInstance.dismiss.subscribe(dismissSpy);
    fixture.componentInstance['cancel']();
    expect(dismissSpy).toHaveBeenCalledOnce();
  });
});
