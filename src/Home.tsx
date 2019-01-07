import React, {useState,useEffect,FunctionComponent } from 'react';
import "@material/textfield/dist/mdc.textfield.min.css"
//@ts-ignore
import {MDCTextField} from "@material/textfield"
import "@material/button/dist/mdc.button.min.css"
//@ts-ignore
import {MDCRipple} from "@material/ripple"
import logo from './logo.svg';
import "@material/drawer/dist/mdc.drawer.min.css"
import "@material/list/dist/mdc.list.min.css"
//@ts-ignore
import {MDCList} from '@material/list'; //Required for drawer
import "@material/image-list/dist/mdc.image-list.min.css"
import './App.css';
import "./Home.scss"

const Home = () => {
  useEffect(()=>{new MDCList(document.querySelector('.mdc-list'))},[])
  return (
    <div className="home">
      <aside className="mdc-drawer shrine-drawer">
        <div className="mdc-drawer__header">
          <svg className="shrine-logo-drawer" version="1.1" x="0px" y="0px"
            width="48px" height="48px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" fill="#000000" focusable="false"><g><g>
                <path d="M17,2H7L2,6.62L12,22L22,6.62L17,2z M16.5,3.58l3.16,2.92H16.5V3.58z M7.59,3.5H15v3H4.34L7.59,3.5z
                  M11.25,18.1L7.94,13h3.31V18.1z M11.25,11.5H6.96L4.69,8h6.56V11.5z M16.5,12.32 M12.75,18.09V8h6.56L12.75,18.09z"/>
              </g><rect fill="none" width="24" height="24"/></g>
          </svg>
          <h1 className="shrine-title">SHRINE</h1>
          <div className="App">
            <header className="App-header"><img src={logo} className="App-logo" alt="logo" /></header>
          </div>
        </div>
        <div className="mdc-drawer__content">
          <nav className="mdc-list">
            <a className="mdc-list-item mdc-list-item--activated" aria-selected="true" href="#">
              Featured
            </a>
            <li className="shrine-select-item-divider mdc-list-divider" role="separator"></li>            <a className="mdc-list-item" href="#">
              Apartment
            </a>
            <a className="mdc-list-item" href="#">
              Accessories
            </a>
            <a className="mdc-list-item" href="#">
              Shoes
            </a>
            <a className="mdc-list-item" href="#">
              Tops
            </a>
            <a className="mdc-list-item" href="#">
              Bottoms
            </a>
            <a className="mdc-list-item" href="#">
              Dresses
            </a>
            <a className="mdc-list-item" href="#">
              My Account
            </a>
          </nav>
        </div>
      </aside>
      {/* Image List Comes here */}
      <div className="shrine-body">
        <ul className="mdc-image-list mdc-image-list--masonry product-list">
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/ginger-scarf.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Ginger scarf</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/blue-stone-mug.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Blue stone mug</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/cerise-scallop.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Cerise scallop tee</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/chambray-napkins.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Chambray napkins</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/fine-lines.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Fine lines tee</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/garden-strand.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Garden strand</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/gatsby-hat.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Gatsby hat</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/gilt-desk-trio.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Gilt desk trio</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/kitchen-quattro.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Kitchen quattro</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/seabreeze-sweater.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Seabreeze sweater</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/shrug-bag.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Shrug bag</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/stella-sunglasses.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Stella sunglasses</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/surf-and-perf.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Surf and perf shirt</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/vagabond-sack.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Vagabond sack</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/walter-henley.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Walter henley (white)</span>
            </div>
          </li>
          <li className="mdc-image-list__item">
            <img className="mdc-image-list__image" src="assets/weave-keyring.jpg"/>
            <div className="mdc-image-list__supporting">
              <span className="mdc-image-list__label">Weave keyring</span>
            </div>
          </li>        
        </ul>
      </div>
    </div>
  )
}
export default Home;
