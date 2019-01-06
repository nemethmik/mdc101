import React, {useState,useEffect,FunctionComponent } from 'react';
// import logo from './logo.svg';
// import './App.css';
import "@material/button/dist/mdc.button.min.css"
//@ts-ignore
import {MDCRipple} from "@material/ripple"
//const App = ({initial = 19}:{initial?:number}) => {
const App = ({initial = 19}:{initial?:number}) => {
    const [clicks,setClick] = useState(initial)
  useEffect(()=>{
    console.log("Effect executed")
    const buttons = document.querySelectorAll(".mdc-button")
    for(const button of buttons) MDCRipple.attachTo(button)
  },[])
  return (
    <button className="mdc-button" onClick={()=>setClick(clicks + 1)} >Clicked {clicks}</button>
  )
}
export default App;
