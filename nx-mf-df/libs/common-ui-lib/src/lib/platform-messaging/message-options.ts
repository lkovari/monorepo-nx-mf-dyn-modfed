import { PLATFORM_BROADCAST_TARGET_SENTINEL } from '@nx-mf-df/contracts-platform-messaging';

export const BROADCAST_TARGET_VALUE = PLATFORM_BROADCAST_TARGET_SENTINEL;

export const PLATFORM_SENSITIVITY_OPTIONS: {
  label: string;
  value: string;
}[] = [
  { label: 'public', value: 'public' },
  { label: 'internal', value: 'internal' },
];

export const PLATFORM_SEVERITY_OPTIONS: {
  label: string;
  value: string;
}[] = [
  { label: 'info', value: 'info' },
  { label: 'success', value: 'success' },
  { label: 'warn', value: 'warn' },
  { label: 'error', value: 'error' },
];
