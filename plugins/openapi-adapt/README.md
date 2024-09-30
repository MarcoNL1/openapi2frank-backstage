# OpenAPI2Frank

Welcome to the OpenAPI2Frank plugin!

_This plugin was created through the Backstage CLI_

## Getting started

To use this plugin, you need to install it in your project.

```bash
yarn add @wearefrank/backstage-plugin-openapi2frank
```

If this command gives an error, try:

```bash
yarn workspace app add @wearefrank/backstage-plugin-openapi2frank
```

Then, you need to add it to your Backstage instance. You can do this by adding the following to your ```App.tsx``` file:<br/>
The ```App.tsx``` file is located at ```packages/app/src/App.tsx```

```tsx
import { OpenapiAdaptPage } from '@wearefrank/backstage-plugin-openapi2frank';

//<Flatroutes>
    <Route path="/openapi-adapter" element={<OpenapiAdaptPage />} />
```

Add the following proxy to your ```app-config.yaml``` file:

```yaml
proxy:
  endpoints:
    '/openapi-frank-generator':
      target: https://openapi-frank-generator.wearefrank.org/
      credentials: dangerously-allow-unauthenticated
```

You can add a navigation item to your sidebar by adding the following to your ```Root.tsx``` file located at ```packages/app/src/components/Root.tsx```, 
of course you can change the icon and the text to your liking:

```tsx
import PublishIcon from '@material-ui/icons/Publish';

// <SidebarGroup label="Menu" icon={<MenuIcon />}>
      <SidebarItem icon={PublishIcon} to="openapi-adapter" text="API Converter" />
```