export const PLATFORM_MESSAGE_KIND_OPTIONS: {
  label: string;
  value: string;
}[] = [
  { label: 'event', value: 'event' },
  { label: 'command', value: 'command' },
  { label: 'query', value: 'query' },
  { label: 'state', value: 'state' },
  { label: 'user-context', value: 'user-context' },
];

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

export const BROADCAST_TARGET_VALUE = '__broadcast__';
