import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { openapiAdaptPlugin, OpenapiAdaptPage } from '../src/plugin';

createDevApp()
  .registerPlugin(openapiAdaptPlugin)
  .addPage({
    element: <OpenapiAdaptPage />,
    title: 'Root Page',
    path: '/openapi-adapter',
  })
  .render();
