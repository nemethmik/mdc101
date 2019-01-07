import React, {useState,useEffect,FunctionComponent } from 'react';
import "@material/textfield/dist/mdc.textfield.min.css"
//@ts-ignore
import {MDCTextField} from "@material/textfield"
import "@material/button/dist/mdc.button.min.css"
//@ts-ignore
import {MDCRipple} from "@material/ripple"
import logo from './logo.svg';
import './App.css';
import './Login.scss';
import Home from "./Home"
type AppPages = "LOGIN" | "HOME"
const App = () => {
  const [page,setPage] = useState<AppPages>("LOGIN")
  useEffect(()=>{
    for(const tf of document.querySelectorAll(".mdc-text-field")) new MDCTextField(tf)
    for(const b of document.querySelectorAll(".mdc-button")) MDCRipple.attachTo(b)
  },[])
  const appHeader = (
    <section className="header">
      <svg className="shrine-logo" version="1.1" x="0px" y="0px"
         width="48px" height="48px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" fill="#000000" focusable="false"><g><g>
            <path d="M17,2H7L2,6.62L12,22L22,6.62L17,2z M16.5,3.58l3.16,2.92H16.5V3.58z M7.59,3.5H15v3H4.34L7.59,3.5z
               M11.25,18.1L7.94,13h3.31V18.1z M11.25,11.5H6.96L4.69,8h6.56V11.5z M16.5,12.32 M12.75,18.09V8h6.56L12.75,18.09z"/>
          </g><rect fill="none" width="24" height="24"/></g>
      </svg>
      <h1>SHRINE</h1>
      <div className="App">
        <header className="App-header"><img src={logo} className="App-logo" alt="logo" /></header>
      </div>
    </section>
  )
  return (
    <>
      {page == "HOME" && <Home/>}
      {page == "LOGIN" && 
        <div className="shrine-login">
          {appHeader}
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
        </div>
      }
    </>
  )
}
export default App;
