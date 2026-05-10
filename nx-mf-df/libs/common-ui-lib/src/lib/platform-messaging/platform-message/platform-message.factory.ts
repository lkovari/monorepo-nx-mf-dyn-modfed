import type { Sensitivity } from '@lkovari/microfrontend-platform-communication/contracts';

import { BROADCAST_TARGET_VALUE } from '../message-options';
import { PLATFORM_MESSAGE_V1 } from '../message-names';
import type { PlatformMessageEvent, PlatformMessagePayload } from './platform-message.schema';

export interface CreatePlatformEventMessageInput {
  readonly source: string;
  readonly target: string | undefined;
  readonly sensitivity: Sensitivity;
  readonly payload: PlatformMessagePayload;
}

export function createPlatformEventMessage(
  input: CreatePlatformEventMessageInput,
): PlatformMessageEvent {
  const messageId = crypto.randomUUID();
  const correlationId = crypto.randomUUID();
  const occurredAtUtc = new Date().toISOString();
  const base: PlatformMessageEvent = {
    messageName: PLATFORM_MESSAGE_V1,
    messageVersion: 1,
    messageId,
    correlationId,
    source: input.source,
    occurredAtUtc,
    kind: 'event',
    sensitivity: input.sensitivity,
    eventKind: 'platform.message',
    payload: input.payload,
  };
  const rawTarget = input.target;
  const resolvedTarget =
    rawTarget === undefined ||
    rawTarget === '' ||
    rawTarget === BROADCAST_TARGET_VALUE
      ? undefined
      : rawTarget;
  if (resolvedTarget !== undefined) {
    return { ...base, target: resolvedTarget };
  }
  return base;
}
