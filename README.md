# mdc101
MDC Web Codelabs Adapted for React with Hooks/TypeScript/CRA
## Motivation
This is a 5-part series of the MDC codelabs starting with [MDC101](https://codelabs.developers.google.com/codelabs/mdc-101-web/) 
I'll initialize the project with **npx create-react-app . --typescript** (CRA) 
Then I'll try to make the tutorials both with and without SASS. I'm not sure, if SASS can be used with a CRA project. SASS is the recommended way of [using MDC Web](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md#using-mdc-web-with-sass-and-es2015)

## MDC111
### Initialization with CRA/TypeScript, SASS, React Hooks and MDC Web
This is a branch directly from the empty master root for [MDC111](https://codelabs.developers.google.com/codelabs/mdc-111-web) from the Google MDC Web codelab series.
CRA a projects a perfectly fine for SASS, just node-sass, rename the css files to scss where you want to use SASS syntax, and add .env with SASS_PATH to node_modules.
- **npx create-react-app . --typescript**
- **npm install react@next react-dom@next** for React Hooks 16.7.0-alpha.2
- **npm install node-sass**
- Add **.env** with **SASS_PATH=./node_modules**
- **npm install material-components-web** for MDC Web

### Copying Startup Files from Original MDC111
- Copy _variables, _layout, _theme, app SCSS files
- Delete App.css, index.css, logo.svg
- Replace title in public/index.html to **Shipping Address**
- Add links to index.html:
```
    <link rel="shortcut icon" href="https://material.io/favicon.ico"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"/>
```
- Copy the body contents from index.html into App.tsx
```
  <header class="crane-header">
    Shipping Address
  </header>

  <main class="crane-main">
    <form method="post" action="." id="crane-shipping-form">
      <div class="crane-row">
        <div class="crane-field">
          <input class="crane-input" id="crane-name-input" type="text" required autofocus>
          <label class="crane-label" for="crane-name-input">
            Name
          </label>
        </div>
      </div>
      <div class="crane-row">
        <div class="crane-field">
          <input class="crane-input" id="crane-address-input" type="text" required>
          <label class="crane-label" for="crane-address-input">
            Address
          </label>
        </div>
      </div>
      <div class="crane-row">
        <div class="crane-field">
          <input class="crane-input" id="crane-city-input" type="text" required>
          <label class="crane-label" for="crane-city-input">
            City
          </label>
        </div>
      </div>
      <div class="crane-row">
        <div class="crane-field">
          <select class="crane-input" id="crane-state-input" required>
            <option value="" selected></option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <label class="crane-label" for="crane-state-input">
            State
          </label>
        </div>
        <div class="crane-field">
          <!--
            Note: `pattern="[0-9]*"` tells Safari on iPhone to display a large numeric keypad without decimal points.
            See https://www.filamentgroup.com/lab/type-number.html
          -->
          <input class="crane-input" id="crane-zip-code-input"
                 type="text" required minlength="5" maxlength="5" pattern="[0-9]*">
          <label class="crane-label" for="crane-zip-code-input">
            ZIP Code
          </label>
        </div>
      </div>
      <div class="crane-row crane-row--submit">
        <button type="submit" class="crane-button">Save</button>
      </div>
    </form>
  </main>
```
- Now you will have a lot of errors:
  - Replace class to **className** in the entire HTML block
  - Close the input elements with forward slash like so
  ```<input className="crane-input" id="crane-name-input" type="text" required autoFocus/>```
  - Rename autofocus to **autoFocus** in input and for to **htmlFor** in label elements.
  - Replace minlength, maxlength in input elements like so: **minLength={5} maxLength={5}**
  - Include the HTML comment block into a JS comment block like so: ```{/*<!-- Note: ... -->*/}```
  - Sandwitch the entire HTML block into a React fragment block and refactor App to a default function components like so
  ```
  export default function App() {
    return (
      <>
        <header className="crane-header">
        ...
        </main>
      </>
    )
  }
  ```
- Delete the references to App.css and index.css from App.tsx and intex.tsx
- npm start and chekout the result<br/> 
<img src="./public/mdc111unstyledform.png" width="200px"/>
- import app.scss into App.tsx and you will get a nicely styled form:<br/>
<img src="./public/mdc111mdstyledform.png" width="300px"/>

### Commit Changes: Initial Shipping Address Form Added
This series of steps is a perfect scenario how to initialize a CRA/TypeScrip/React Hook project for MDC Web/SASS.
After this series of steps you will have a clean excellent starting point for any applications.
So far so good and I love this project. 

### Update the Button
- At the top of **_theme.scss**, delete the .crane-button { ... } block, 
and add the following in its place:
```
$mdc-theme-primary: $crane-primary-color;
@import "@material/button/mdc-button";
```
Note, that **mdc-button is an SCSS** file and is imported into the application-specific _theme.scss, _theme.scss is imported into app.scss, which is imported into App.tsx. The CSS class names in the SCSS and TSX files must match, otherwise, we will not get any errors, the application simply is not working as expected.  

- In **index.html**, remove the crane-button class from the &lt;button> element, and add the **mdc-button mdc-button--raised** classes:
```
<button type="submit" class="mdc-button mdc-button--raised">Save</button>
```
- Import MDCRipple into App.tsx with a ts-ignore, since MDC Web has no TypeScript definitions, but it is [planned in 2019 Q1](https://github.com/material-components/material-components-web/issues/4225)
```
//@ts-ignore
import {MDCRipple} from '@material/ripple'
```
To instantiate the ripple on the button, add an effect hook to the App component:
```
  React.useEffect(function(){new MDCRipple(document.querySelector('.mdc-button'))},[])
```
- Add Roboto fonts to index.html: &lt;link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>

### Update the Select Element
- Add @import "@material/select/mdc-select"; to **_theme.scss**
- Locate the select element in **index.html** Replace the crane-input class with **mdc-select__native-control**
- Just below the closing select tag, replace the crane-label class with **mdc-floating-label**
- Then add the following markup immediately after the label:```<div className="mdc-line-ripple"/>```
- Finally, add the following tags around the select, label and line-ripple elements (but inside the crane-field element):```<div className="mdc-select"> ... </div>```
The result should look like so:
```
<div class="crane-field">
  <div class="mdc-select">
    <select class="mdc-select__native-control" id="crane-state-input" required>
      <option value="" selected></option>
      <option value="AL">Alabama</option>
      ...
      <option value="WY">Wyoming</option>
    </select>
    <label class="mdc-floating-label" for="crane-state-input">
      State
    </label>
    <div class="mdc-line-ripple"></div>
  </div>
</div>
```
- **import {MDCSelect} from '@material/select'** with @ts-ignore in App.tsx; to instantiate the select, add **new MDCSelect(document.querySelector('.mdc-select'))** to the effect hook.

### Update the Text Fields
- **@import "@material/textfield/mdc-text-field"** in _theme.scss
- In App.tsx, locate the input element for the "Name" field. Replace the crane-input class with **mdc-text-field__input**
- Next, replace the crane-label class with **mdc-floating-label**
- Then add the following markup immediately after the label:```<div className="mdc-line-ripple"/>```
- Finally, wrap all 3 elements with the following:```<div className="mdc-text-field"> ... </div>```
- The resulting markup should look like this:
```
<div className="crane-field">
  <div className="mdc-text-field">
    <input className="mdc-text-field__input" id="crane-name-input"
           type="text" required autoFocus>
    <label className="mdc-floating-label" htmlFor="crane-name-input">
      Name
    </label>
    <div className="mdc-line-ripple"></div>
  </div>
</div>
```
- Repeat the same procedure for all other input elements on the page.
- You can now remove the **.crane-label** and **.crane-input** styles from _theme.scss, which are no longer used.

- Add **"downlevelIteration": true,** to tsconfig to support **for-of** syntax; and restart the server (VERY IMPORTANT!) 
- **import {MDCTextField} from '@material/textfield'** to App.tsx;
To instantiate the text fields, add the following to the effect hook:
```for(const tf of document.querySelectorAll('.mdc-text-field')) new MDCTextField(tf)```