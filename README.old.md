# mdc101
MDC Web Codelabs Adapted for React with Hooks/TypeScript/CRA
## Motivation
This is a 5-part series of the MDC codelabs starting with [MDC101](https://codelabs.developers.google.com/codelabs/mdc-101-web/) 
I'll initialize the project with **npx create-react-app . --typescript** (CRA) 
Then I'll try to make the tutorials both with and without SASS. I'm not sure, if SASS can be used with a CRA project. SASS is the recommended way of [using MDC Web](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md#using-mdc-web-with-sass-and-es2015)

## MDC111
This is a branch directly from the empty master root for [MDC111](https://codelabs.developers.google.com/codelabs/mdc-111-web) from the Google MDC Web codelab series.
CRA a projects a perfectly fine for SASS, just node-sass, rename the css files to scss where you want to use SASS syntax, and set SASS_PATH to node_modules.
- **npx create-react-app . --typescript**
- **npm install react@next react-dom@next** for React Hooks 16.7.0-alpha.2
- **npm install node-sass**
- **set SASS_PATH=.\node_modules**
- **npm install material-components-web** for MDC Web
