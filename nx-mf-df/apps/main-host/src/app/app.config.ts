import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideBus, provideHostBridge } from '@lkovari/microfrontend-platform-communication/angular';
import { TopicRegistry } from '@lkovari/microfrontend-platform-communication/core';
import { MessageService } from 'primeng/api';
import {
  ALL_PARTICIPANT_IDS,
  PLATFORM_MESSAGE_V1,
  PLATFORM_PARTICIPANT_ID,
  platformMessageEventSchema,
  providePlatformMessageListenerBootstrap,
  provideWorkspacePrimeNG,
  SHELL_HOST_ID,
  MF_REMOTE_A_ID,
  MF_REMOTE_B_ID,
  MF_REMOTE_C_ID,
} from '@nx-mf-df/common-ui-lib';

import { appRoutes } from './app.routes';

const platformTopicRegistry = (): TopicRegistry => {
  const registry = new TopicRegistry();
  registry.register({
    messageName: PLATFORM_MESSAGE_V1,
    allowedPublishers: [...ALL_PARTICIPANT_IDS],
    allowedSubscribers: [...ALL_PARTICIPANT_IDS],
    minMessageVersion: 1,
    maxMessageVersion: 1,
  });
  return registry;
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    provideRouter(appRoutes),
    provideBus({
      appId: SHELL_HOST_ID,
      defaultSubscriberId: SHELL_HOST_ID,
      dispatch: 'microtask',
      validators: {
        [PLATFORM_MESSAGE_V1]: platformMessageEventSchema,
      },
      dedupe: {
        enabled: true,
        windowMs: 5000,
      },
      registry: platformTopicRegistry(),
      allowUnregisteredMessageNames: false,
    }),
    provideHostBridge({
      remotes: [MF_REMOTE_A_ID, MF_REMOTE_B_ID, MF_REMOTE_C_ID],
      onConflict: 'return-existing',
    }),
    provideWorkspacePrimeNG(),
    MessageService,
    { provide: PLATFORM_PARTICIPANT_ID, useValue: SHELL_HOST_ID },
    providePlatformMessageListenerBootstrap(),
  ],
};
