import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
  MF_REMOTE_A_ID,
  PLATFORM_PARTICIPANT_ID,
  providePlatformMessageListenerBootstrap,
  provideWorkspacePrimeNG,
} from '@nx-mf-df/common-ui-lib';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    provideRouter(appRoutes),
    provideWorkspacePrimeNG(),
    MessageService,
    { provide: PLATFORM_PARTICIPANT_ID, useValue: MF_REMOTE_A_ID },
    providePlatformMessageListenerBootstrap(),
  ],
};
