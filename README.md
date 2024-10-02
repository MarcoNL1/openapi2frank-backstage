# [Backstage](https://backstage.io)

## Contents

- [Introduction](#introduction)
- [Setting up the Backstage app](#setting-up-the-backstage-app)
- [Running the Backstage app](#running-the-backstage-app)
- [Developing a new plugin](#developing-a-new-plugin)
- [CORS](#cors)
- [Publishing a plugin](#publishing-a-plugin)
- [Conclusion](#conclusion)

## Introduction
### What is Backstage?
Backstage is a platform for building developer portals. </br>
It is an open-source platform that helps developers to build, share, and discover software across their organization. 
It is a single place for all your infrastructure, applications, and services.

### In this tutorial
In this tutorial, we will set up a Backstage app and run it locally. We will also learn how to develop a new frontend plugin for the Backstage app.
I will also talk about some problems I encountered and how I solved them.

## Setting up the Backstage app
To set up your own Backstage instance, follow the instructions in the [Backstage documentation](https://backstage.io/docs/getting-started).

## Running the Backstage app

To run the Backstage app, run the following commands:
```sh
yarn install
yarn dev
```
If the browser does not open automatically, navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Developing a new plugin

This tutorial is specifically for developing a frontend plugin.
To start developing a new plugin follow the instructions in the [Backstage documentation](https://backstage.io/docs/plugins/create-a-plugin).

The created folder will contain a ExampleComponent and ExampleFetchComponent. 
</br> Try to use the ExampleComponent for the rendering of your component and ExampleFetchComponent for fetching data from the backend.
</br> Of course you can change the names of these components to something more meaningful.
</br>More information about the structure of a plugin can be found [here](https://backstage.io/docs/plugins/structure-of-a-plugin).

For frontend components, have a look at the [Backstage Storybook](https://backstage.io/storybook). You can also use the [Material-UI](https://material-ui.com/) components, but using Backstage components is recommended.

## CORS
If you want to request something from a different domain, you will most likely encounter CORS issues. 
The easiest way to solve this is to use a [proxy](https://backstage.io/docs/plugins/proxying).

The problem I encountered with the proxy was that I had no credentials, I solved this by adding ```dangerously-allow-unauthenticated``` to the options to skip the credentials.
>[!CAUTION] 
>This can be a security risk in some cases, so be careful with this option.

## Publishing a plugin

To publish a plugin, start by installing typescript:
```sh
npm insall -g typescript
```

Then check if it installed successfully:
```sh
tsc --version
```

Navigate to the root of your plugin and run the following command to generate the ```./dist``` folder:
```sh
npm run build
```
Without this folder your plugin will not be recognized in other Backstage instances.

You are now ready to publish your plugin, follow [this tutorial](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).
After you created the package.json file, make sure to add the following line to the file if it is not already there:
```json
"files": [
    "dist"
  ]
```
This ensures you publish the correct code for others to install as a plugin.

Make sure to provide all instructions on how to install and use your plugin in the README.md file.

## Conclusion
In this tutorial, we learned how to set up a Backstage app, run it locally, and develop a new frontend plugin.
We also learned how to solve CORS issues and how to publish a plugin.
