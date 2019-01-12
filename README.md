# mdc101
MDC Web Codelabs Adapted for React with Hooks/TypeScript/CRA
## Motivation
This is a 5-part series of the MDC codelabs starting with [MDC101 Integrating MDC Web with Frameworks](https://codelabs.developers.google.com/codelabs/mdc-101-web/) 
I'll initialize the project with **npx create-react-app . --typescript** (CRA) 
Then I'll try to make the tutorials both with and without SASS. I'm not sure, if SASS can be used with a CRA project. SASS is the recommended way of [using MDC Web](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md#using-mdc-web-with-sass-and-es2015)

## MDC112
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
- **npm install react@next react-dom@next** for React Hooks 16.7.0-alpha.2
- **npm install node-sass**
- Add **.env** with **SASS_PATH=./node_modules**
- **npm install material-components-web** for MDC Web

