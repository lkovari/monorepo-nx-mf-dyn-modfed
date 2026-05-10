import { Injectable, inject } from '@angular/core';
import type { AckResult } from '@lkovari/microfrontend-platform-communication/contracts';
import type { MessageBase } from '@lkovari/microfrontend-platform-communication/contracts';
import { HOST_BRIDGE_TOKEN } from '@lkovari/microfrontend-platform-communication/angular';

import { appendPlatformMessageForReplay } from '../platform-message/platform-message-replay.storage';
import { RemotePlatformBusService } from './remote-platform-bus.service';

@Injectable({ providedIn: 'root' })
export class MessageSenderService {
  private readonly hostBridgeHandle = inject(HOST_BRIDGE_TOKEN, {
    optional: true,
  });

  private readonly remoteBus = inject(RemotePlatformBusService);

  trySend(message: MessageBase): AckResult | null {
    const handle = this.hostBridgeHandle;
    const result = handle
      ? handle.tryPublish(message)
      : this.remoteBus.tryPublish(message);
    if (result !== null && result.accepted) {
      appendPlatformMessageForReplay(message);
    }
    return result;
  }
}
