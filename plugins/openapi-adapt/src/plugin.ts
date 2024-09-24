import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const openapiAdaptPlugin = createPlugin({
  id: 'openapi-adapt',
  routes: {
    root: rootRouteRef,
  },
});

export const OpenapiAdaptPage = openapiAdaptPlugin.provide(
  createRoutableExtension({
    name: 'OpenapiAdaptPage',
    component: () =>
      import('./components/AdapterComponent').then(m => m.AdapterComponent),
    mountPoint: rootRouteRef,
  }),
);
