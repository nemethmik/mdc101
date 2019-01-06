import React, {useState,useEffect,FunctionComponent } from 'react';
import "@material/textfield/dist/mdc.textfield.min.css"
//@ts-ignore
import {MDCTextField} from "@material/textfield"
import "@material/button/dist/mdc.button.min.css"
//@ts-ignore
import {MDCRipple} from "@material/ripple"
import logo from './logo.svg';
import './App.css';
type AppPages = "LOGIN" | "HOME"
const App = () => {
  const [page,setPage] = useState<AppPages>("LOGIN")
  useEffect(()=>{
    for(const tf of document.querySelectorAll(".mdc-text-field")) new MDCTextField(tf)
    for(const b of document.querySelectorAll(".mdc-button")) MDCRipple.attachTo(b)
  },[])
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
