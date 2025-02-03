import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const frankdocPlugin = createPlugin({
  id: 'frankdoc',
  routes: {
    root: rootRouteRef,
  },
});

export const FrankdocPage = frankdocPlugin.provide(
  createRoutableExtension({
    name: 'FrankdocPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
