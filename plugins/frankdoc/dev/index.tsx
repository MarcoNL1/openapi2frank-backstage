import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { frankdocPlugin, FrankdocPage } from '../src';

createDevApp()
  .registerPlugin(frankdocPlugin)
  .addPage({
    element: <FrankdocPage />,
    title: 'Root Page',
    path: '/frankdoc',
  })
  .render();
