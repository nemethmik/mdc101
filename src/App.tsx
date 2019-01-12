import React, { Component } from 'react';
//@ts-ignore
import {MDCRipple} from '@material/ripple'
//@ts-ignore
import {MDCSelect} from '@material/select'
//@ts-ignore
import {MDCTextField} from '@material/textfield'
import "./app.scss"
export default function App() {
  React.useEffect(function(){
    new MDCRipple(document.querySelector('.mdc-button'))
    new MDCSelect(document.querySelector('.mdc-select'))
    for(const tf of document.querySelectorAll('.mdc-text-field')) new MDCTextField(tf)
  },[])
  return (
    <>
      <header className="crane-header">Shipping Address</header>
      <main className="crane-main">
        <form method="post" action="." id="crane-shipping-form">
          <div className="crane-row">
            <div className="crane-field">
              <div className="mdc-text-field">
                <input className="mdc-text-field__input" id="crane-name-input" type="text" required autoFocus/>
                <label className="mdc-floating-label" htmlFor="crane-name-input">
                  Name
                </label>
                <div className="mdc-line-ripple"/>
              </div>
            </div>
          </div>
          <div className="crane-row">
            <div className="crane-field">
              <div className="mdc-text-field">
                <input className="mdc-text-field__input" id="crane-address-input" type="text" required/>
                <label className="mdc-floating-label" htmlFor="crane-address-input">
                  Address
                </label>
                <div className="mdc-line-ripple"/>
              </div>
            </div>
          </div>
          <div className="crane-row">
            <div className="crane-field">
              <div className="mdc-text-field">
                <input className="mdc-text-field__input" id="crane-city-input" type="text" required/>
                <label className="mdc-floating-label" htmlFor="crane-city-input">
                  City
                </label>
                <div className="mdc-line-ripple"/>
              </div>
            </div>
          </div>
          <div className="crane-row">
            <div className="crane-field">
              <div className="mdc-select">
                <select className="mdc-select__native-control" id="crane-state-input" required>
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
                <label className="mdc-floating-label" htmlFor="crane-state-input">
                  State
                </label>
                <div className="mdc-line-ripple"/>
              </div>
            </div>
            <div className="crane-field">
              {/*<!--
                Note: `pattern="[0-9]*"` tells Safari on iPhone to display a large numeric keypad without decimal points.
                See https://www.filamentgroup.com/lab/type-number.html
              -->*/}
              <div className="mdc-text-field">
                <input className="mdc-text-field__input" id="crane-zip-code-input"
                      type="text" required minLength={5} maxLength={5} pattern="[0-9]*"/>
                <label className="mdc-floating-label" htmlFor="crane-zip-code-input">
                  ZIP Code
                </label>
                <div className="mdc-line-ripple"/>
              </div>
            </div>
          </div>
          <div className="crane-row crane-row--submit">
            <button type="submit" className="mdc-button mdc-button--raised">Save</button>
          </div>
        </form>
      </main>
    </>
  )
}
