# [Backstage](https://backstage.io)

## Contents

- [Introduction](#introduction)
- [Setting up the Backstage app](#setting-up-the-backstage-app)
- [Running the Backstage app](#running-the-backstage-app)
- [Developing a new plugin](#developing-a-new-plugin)

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

To start developing a new plugin follow the instructions in the [Backstage documentation](https://backstage.io/docs/plugins/create-a-plugin).
This tutorial is specifically for developing a frontend plugin.

The created folder will contain a ExampleComponent and ExampleFetchComponent. 
</br> Try to use the ExampleComponent for the rendering of your component and ExampleFetchComponent for fetching data from the backend.
</br> Of course you can change the names of these components to something more meaningful.
</br>More information about the structure of a plugin can be found [here](https://backstage.io/docs/plugins/structure-of-a-plugin).

## CORS
If you want to request something from a different domain, you will most likely encounter CORS issues. 
The easiest way to solve this is to use a [proxy](https://backstage.io/docs/plugins/proxying).

The problem I encountered with the proxy was that I had no credentials, I solved this by adding ```dangerously-allow-unauthenticated``` to the options to skip the credentials.
>[!CAUTION] 
>This can be a security risk, so be careful with this option.

