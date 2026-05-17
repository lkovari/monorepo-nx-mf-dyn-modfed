import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  output,
  Signal,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import type { Sensitivity } from '@lkovari/microfrontend-platform-communication/contracts';
import {
  ALL_PARTICIPANT_IDS,
  createPlatformEventMessage,
  PLATFORM_MESSAGE_V1,
} from '@nx-mf-df/contracts-platform-messaging';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

import {
  BROADCAST_TARGET_VALUE,
  PLATFORM_SENSITIVITY_OPTIONS,
  PLATFORM_SEVERITY_OPTIONS,
} from '../message-options';
import { MessageSenderService } from '../services/message-sender.service';

@Component({
  selector: 'lib-message-composer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    SelectModule,
    InputTextModule,
    TextareaModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './message-composer.component.html',
})
export class MessageComposerComponent {
  protected readonly form: FormGroup;

  readonly currentAppId = input.required<string>();

  readonly bridgeAvailable = input(true);

  readonly dismiss = output<void>();

  private readonly fb = inject(FormBuilder);

  private readonly sender = inject(MessageSenderService);

  private readonly messages = inject(MessageService);

  protected readonly messageContractLabel = `${PLATFORM_MESSAGE_V1} (event)`;

  protected readonly sensitivityOptions = PLATFORM_SENSITIVITY_OPTIONS;

  protected readonly severityOptions = PLATFORM_SEVERITY_OPTIONS;

  protected readonly targetOptions: Signal<
    { label: string; value: string }[]
  >;

  constructor() {
    this.form = this.fb.group({
      source: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      sensitivity: this.fb.nonNullable.control<
        (typeof PLATFORM_SENSITIVITY_OPTIONS)[number]['value']
      >('public', Validators.required),
      severity: this.fb.nonNullable.control<
        (typeof PLATFORM_SEVERITY_OPTIONS)[number]['value']
      >('info', Validators.required),
      title: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      body: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      target: this.fb.nonNullable.control<string>(BROADCAST_TARGET_VALUE),
    });
    this.targetOptions = computed(() =>
      buildTargetSelectOptions(this.currentAppId()),
    );
    effect(() => {
      const id = this.currentAppId();
      this.form.patchValue({ source: id }, { emitEvent: false });
    });
  }

  protected submit(): void {
    if (this.form.invalid || !this.bridgeAvailable()) {
      return;
    }
    const raw = this.form.getRawValue();
    const source = raw.source.trim();
    if (source.length === 0) {
      return;
    }
    const targetValue = raw.target;
    const target =
      targetValue === BROADCAST_TARGET_VALUE ? undefined : targetValue;
    if (!isSensitivity(raw.sensitivity)) {
      return;
    }
    const message = createPlatformEventMessage({
      source,
      target,
      sensitivity: raw.sensitivity,
      payload: {
        title: raw.title,
        body: raw.body,
        severity: raw.severity,
        createdByApp: source,
      },
    });
    const result = this.sender.trySend(message);
    if (result === null) {
      this.messages.add({
        severity: 'error',
        summary: 'Send failed',
        detail: 'Platform bridge is not available',
      });
      return;
    }
    if (result.accepted) {
      this.messages.add({
        severity: 'success',
        summary: 'Message sent',
        detail: 'Platform message was accepted',
      });
      this.dismiss.emit();
      return;
    }
    this.messages.add({
      severity: 'error',
      summary: 'Message rejected',
      detail: result.message,
    });
  }

  protected cancel(): void {
    this.dismiss.emit();
  }
}

function buildTargetSelectOptions(currentAppId: string): {
  label: string;
  value: string;
}[] {
  const targets = ALL_PARTICIPANT_IDS.filter((id) => id !== currentAppId);
  return [
    { label: 'Broadcast / all apps', value: BROADCAST_TARGET_VALUE },
    ...targets.map((id) => ({ label: id, value: id })),
  ];
}

function isSensitivity(value: string): value is Sensitivity {
  return value === 'public' || value === 'internal';
}
