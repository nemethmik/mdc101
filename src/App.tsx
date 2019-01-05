import React, {FunctionComponent, useState, useEffect} from "react"
// import logo from './logo.svg';
// import './App.css';
// import Button from "@material/react-button"
// import "@material/react-button/dist/button.css" //This is important to get proper styling
//@ts-ignore
import {MDCRipple} from "@material/ripple"
import "@material/button/dist/mdc.button.min.css"
type AppProps = {initial?: number}
const App: FunctionComponent<AppProps> = ({ initial = 19 }) => {
  const [clicks, setClicks] = useState(initial);
  useEffect(() => {
    //MDCRipple.attachTo(document.querySelector(".mdc-button"))
    console.log("Effect executed")
    const buttons = document.querySelectorAll(".mdc-button")
    //"downlevelIteration": true had to be added to tsconfig to support for .. of
    for (const button of buttons) {MDCRipple.attachTo(button)}
  },[]) //This empty array is important to let the effect executed only once 
  return (
    <button onClick={() => setClicks(clicks + 1)} 
      className="mdc-button">Clicked {clicks}</button>
  )
}
// const App: FunctionComponent<AppProps> = ({ initial = 19 }) => {
//   const [clicks, setClicks] = useState(initial);
//   return (
//     <Button onClick={() => setClicks(clicks + 1)}>Clicked {clicks}</Button>
//   )
// }
//App.defaultProps = { initial: 22 } // This would override the initialization value
export default App;