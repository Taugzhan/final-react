import React from 'react'
import logo from '../assets/images/mono__logo.jpeg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Header = ({ setDark, dark ,setSearch}) => {

const search = (e)=>{
    setSearch(e.target.value)
}

  return (
    <>
      <section className='header'>
        <div className='header__container'>
          <div className='header__wrapper'>
            <NavLink to="/" className="link">
              <div className='header__logo'>
                <img src={logo} />
              </div>
            </NavLink>
            <div className='header__input' onKeyDown={(e)=>search(e)}>
              <input type='text' />
            </div>
            <div className='header__svg'>
              <NavLink to="/" className="link">
                <button className='header__button'>
                  <i class="fa-solid fa-house"></i>
                </button>
              </NavLink>
              <NavLink to="/basket" className="link">
                <button className='header__button'>
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </NavLink >
              <NavLink to="/modal">
                <button className='header__button'>
                  Sign in
                </button>
              </NavLink>
              <button className='header__button' onClick={() => setDark(!dark)} >
                <i class={dark ? "fa-regular fa-sun fa-flip-horizontal" : "fa-solid fa-moon"}  ></i>
              </button>
            </div>
          </div>
          <nav className='navbar'>
            <NavLink to="/cards " className="link">
              <p className='navbar__title'> store</p>
            </NavLink>

            <NavLink to="/delivery" className="link">
              <p className='navbar__title'> delivery</p>
            </NavLink>
            <NavLink to="/users" className="link">
              <p className='navbar__title'>users</p>
            </NavLink>
            <NavLink to="/myaccount" className="link">
              <p className='navbar__title'>my account</p>
            </NavLink>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Header