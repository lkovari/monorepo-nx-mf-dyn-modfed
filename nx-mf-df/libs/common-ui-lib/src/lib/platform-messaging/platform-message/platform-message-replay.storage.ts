import type { MessageBase } from '@lkovari/microfrontend-platform-communication/contracts';

import {
  platformMessageEventSchema,
  type PlatformMessageEvent,
} from './platform-message.schema';

const STORAGE_KEY = 'nxmfdf-platform-msg-replay-v1';

const MAX_STORED = 40;

function readBucket(): unknown[] {
  if (typeof sessionStorage === 'undefined') {
    return [];
  }
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeBucket(items: unknown[]): void {
  if (typeof sessionStorage === 'undefined') {
    return;
  }
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function trimBucket(bucket: unknown[]): void {
  while (bucket.length > MAX_STORED) {
    bucket.shift();
  }
}

function isBroadcastEvent(evt: PlatformMessageEvent): boolean {
  const t = evt.target;
  return t === undefined || t === '';
}

export function appendPlatformMessageForReplay(message: MessageBase): void {
  const parsedMsg = platformMessageEventSchema.safeParse(message);
  if (!parsedMsg.success) {
    return;
  }
  const evt = parsedMsg.data;
  if (isBroadcastEvent(evt)) {
    const bucket = readBucket();
    const withoutBroadcasts = bucket.filter((item) => {
      const p = platformMessageEventSchema.safeParse(item);
      if (!p.success) {
        return true;
      }
      return !isBroadcastEvent(p.data);
    });
    withoutBroadcasts.push(evt);
    trimBucket(withoutBroadcasts);
    writeBucket(withoutBroadcasts);
    return;
  }
  const bucket = readBucket();
  bucket.push(evt);
  trimBucket(bucket);
  writeBucket(bucket);
}

export function takeReplayMessagesForParticipant(
  participantId: string,
): PlatformMessageEvent[] {
  const bucket = readBucket();
  const remaining: unknown[] = [];
  const taken: PlatformMessageEvent[] = [];
  for (const item of bucket) {
    const parsed = platformMessageEventSchema.safeParse(item);
    if (!parsed.success) {
      continue;
    }
    const evt = parsed.data;
    if (isBroadcastEvent(evt)) {
      remaining.push(item);
      continue;
    }
    if (evt.target === participantId) {
      taken.push(evt);
    } else {
      remaining.push(item);
    }
  }
  writeBucket(remaining);
  return taken;
}

export function peekReplayMessagesForParticipant(
  participantId: string,
): PlatformMessageEvent[] {
  const bucket = readBucket();
  const out: PlatformMessageEvent[] = [];
  for (const item of bucket) {
    const parsed = platformMessageEventSchema.safeParse(item);
    if (!parsed.success) {
      continue;
    }
    const evt = parsed.data;
    if (isBroadcastEvent(evt) || evt.target === participantId) {
      out.push(evt);
    }
  }
  return out;
}
