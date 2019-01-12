# mdc101
MDC Web Codelabs Adapted for React with Hooks/TypeScript/CRA
## Motivation
This is a 5-part series of the MDC codelabs starting with [MDC101 Integrating MDC Web with Frameworks](https://codelabs.developers.google.com/codelabs/mdc-101-web/) 
I'll initialize the project with **npx create-react-app . --typescript** (CRA) 
Then I'll try to make the tutorials both with and without SASS. I'm not sure, if SASS can be used with a CRA project. SASS is the recommended way of [using MDC Web](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md#using-mdc-web-with-sass-and-es2015)

## MDC112 (Not Completed, Just use MDC Reat, which is written in clean TypeScript)
### Initialization with CRA/TypeScript, SASS, React Hooks and MDC Web
This is a branch directly from the empty master root for [MDC112](https://codelabs.developers.google.com/codelabs/mdc-112-web) from the [Google MDC Web codelab series](https://material.io/collections/developer-tutorials/#web).
For reference the [MDC React top-app-bar](https://github.com/material-components/material-components-web-react/blob/master/packages/top-app-bar/index.tsx) is written in TypeScript, and uses the foundation classes from MDC Web like so: 
```
import {
  MDCFixedTopAppBarFoundation,
  MDCTopAppBarFoundation,
  MDCShortTopAppBarFoundation,
// @ts-ignore no .d.ts file
} from '@material/top-app-bar/dist/mdc.topAppBar';
```
In this project I'm using React Hooks and not classes.
CRA projects are perfectly fine for SASS, just install node-sass, rename the css files to scss where you want to use SASS syntax, and add .env with SASS_PATH to node_modules.
- **npx create-react-app . --typescript**
- **npm install react@next react-dom@next prop-types** for React Hooks 16.7.0-alpha.2
- **npm install node-sass**
- Add **.env** with **SASS_PATH=./node_modules**
- **npm install material-components-web** for MDC Web

### Introduction from MDC112 Codelab Page
[Material Components (MDC)](material.io/develop) help developers implement Material Design. Created by a team of engineers and UX designers at Google, MDC features dozens of beautiful and functional UI components and is available for Android, iOS, web and Flutter.
MDC Web is engineered to integrate into any front end framework while upholding the principles of Material Design. The following codelab guides you through building a React Component, which uses MDC Web as a foundation. The principles learned in this codelab can be applied to any JavaScript framework.
#### How MDC Web is built
MDC Web's JavaScript layer is comprised of three classes per component: the Component, Foundation, and Adapter. This pattern gives MDC Web the flexibility to integrate with frontend frameworks.
The Foundation contains the business logic that implements Material Design. The Foundation does not reference any HTML elements. This lets us abstract HTML interaction logic into the Adapter. Foundation has an Adapter.
The Adapter is an interface. The Adapter interface is referenced by the Foundation to implement Material Design business logic. You can implement the Adapter in different frameworks such as Angular or React. An implementation of an Adapter interacts with the DOM structure.
The Component has a Foundation, and its role is to
Implement the Adapter, using non-framework JavaScript, and
Provide public methods that proxy to methods in the Foundation.
#### What MDC Web provides
Every package in MDC Web comes with a Component, Foundation, and Adapter. **To instantiate a Component you must pass the root element to the Component's constructor method.** The Component implements an Adapter, which interacts with the DOM and HTML elements. The Component then instantiates the Foundation, which calls the Adapter methods.
To integrate MDC Web into a framework you need to **create your own Component** in that framework's language/syntax. The framework Component implements MDC Web's Adapter and uses MDC Web's Foundation.
#### What you'll build
This codelab demonstrates how to build a custom Adapter to use the Foundation logic to achieve a Material Design React Component. It covers the advanced topics found at Integrating into Frameworks. React is used in this codelab as an example framework, but this approach can be applied to any other framework.
In this codelab, you'll build the [Top App Bar](https://material-components-web.appspot.com/top-app-bar.html) and recreate the top app bar demo page. The demo page layout is already setup so you can start working on the Top App Bar. The Top App Bar will include:
- Navigation icon
- Action items
- There are 4 variants available: Short, always collapsed, fixed, and prominent variants

### The Starter Files of MDC112
- App.tsx The parent component of the entire application. Think of this as the demo page controller and template. This was written in really poor JS, which would require a hell lot of work to rewrite in clean TypeScript and even more more to apply React Hooks. So I gave up and I am simply start using MDC React or MDC Web directly, without these adapter machinery. The examples from MDC101, 111 worked great without writing this complex gear.
- **app.scss** The styles for the application. It also imports the top-app-bar.scss file from MDC Web, as well as the typography.scss to style the text.
```
@import '@material/top-app-bar/mdc-top-app-bar';
@import '@material/typography/mdc-typography';
body { margin: 0;}
.demo-text-container {  padding: 8px;  padding-top: 68px;}
.demo-paragraph:first-child {  margin-top: 0;}
.demo-controls-box {
  @include mdc-elevation(4);
  min-width: 160px;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: white;
  padding: 10px;
}
.demo-control-checkbox {  margin: 12px 0;}
.demo-control-checkbox__label {  margin: 0 8px;}
.demo-control-checkbox--disabled {  color: grey;}
```
- public/**index.html** Like most webpages there is a main index.html page that is served per page. Since this is a single page app (SPA), this is the only page that is served during the entire lifetime of the demo page.
```
  <link rel="shortcut icon" href="https://material.io/favicon.ico"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
  <title>Top App Bar React Component</title>
```
- index.tsx This is where all the application setup code and logic should live. It bootstraps the React app to the DOM and starts the demo page.
- **TopAppBar.js** The component this codelab is going to build.
```
import React from "react"
export default function TopAppBar() {
  return (
    <header>
      TOP APP BAR
    </header>
  )
}
```
