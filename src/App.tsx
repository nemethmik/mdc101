import React, {useState,useEffect,FunctionComponent } from 'react';
import "@material/textfield/dist/mdc.textfield.min.css"
//@ts-ignore
import {MDCTextField} from "@material/textfield"
//Line Ripple is not required since TextField can handle line ripple automatically when a line ripple div is added. That's why it wasn't required in the original Google MDC101 codelab
// import "@material/line-ripple/dist/mdc.line-ripple.min.css";
//@ts-ignore
// import {MDCLineRipple} from "@material/line-ripple" //Not really required
import "@material/button/dist/mdc.button.min.css"
//@ts-ignore
import {MDCRipple} from "@material/ripple"
import logo from "./logo.svg"
import "./App.css" //This CSS must come after MDC CSS imports
//const App = ({initial = 19}:{initial?:number}) => {
// const App = ({initial = 19}:{initial?:number}) => {
//     const [clicks,setClick] = useState(initial)
//   useEffect(()=>{
//     console.log("Effect executed")
//     const buttons = document.querySelectorAll(".mdc-button")
//     for(const button of buttons) MDCRipple.attachTo(button)
//   },[])
//   return (
//     <button className="mdc-button" onClick={()=>setClick(clicks + 1)} >Clicked {clicks}</button>
//   )
// }
type AppPages = "LOGIN" | "HOME"
function App() {
  const [page,setPage] = useState<AppPages>("LOGIN")
  useEffect(()=>{
    console.log("Effect executed")
    // const buttons = document.querySelectorAll(".mdc-button")
    // for(const button of buttons) MDCRipple.attachTo(button)
    // const username = new MDCTextField(document.querySelector('.username'));
    // const password = new MDCTextField(document.querySelector('.password'));  
    // const textFields = document.querySelectorAll(".mdc-text-field")
    // for(const tf of textFields) new MDCTextField(tf)
    for(const tf of document.querySelectorAll(".mdc-text-field")) new MDCTextField(tf)
    for(const b of document.querySelectorAll(".mdc-button")) MDCRipple.attachTo(b)
    //for(const lr of document.querySelectorAll(".mdc-line-ripple")) new MDCLineRipple(lr)
  },[])
//HTML Form action attribute specifies where to send the form-data when a form is submitted, so we cannot use it really here. 
return (
  <>
    <div className="App">
      <header className="App-header"><img src={logo} className="App-logo" alt="logo" /></header>
    </div>
    {page == "HOME" && <p>You did it!</p>}
    {page == "LOGIN" && 
      <form onSubmit={function(e){
        e.preventDefault()
        setPage("HOME")
        }}>
        <div className="mdc-text-field username">
          <input type="text" className="mdc-text-field__input" id="username-input" name="username" required/>
          <label className="mdc-floating-label" htmlFor="username-input">Username</label>
          <div className="mdc-line-ripple"/>
        </div>
        <div className="mdc-text-field password">
          <input type="password" className="mdc-text-field__input" id="password-input" name="password" required minLength={8}/>
          <label className="mdc-floating-label" htmlFor="password-input">Password</label>
          <div className="mdc-line-ripple"/>
        </div>
        <div className="button-container">
          <button type="button" className="mdc-button cancel">Cancel</button>
          <button className="mdc-button mdc-button--raised next">Next</button>
        </div>
      </form>
    }
  </>
  )
}
export default App;
