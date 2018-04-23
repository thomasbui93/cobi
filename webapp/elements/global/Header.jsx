import Link from 'next/link'
import React from 'react'
import Menu from './../general/GenericMenu'
import Logo from './../general/Logo'
import NoSSR from 'react-no-ssr'

export default class Header extends React.Component {
  constructor() {
    super()
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.state = {
      visible: false
    }
  }

  toggleMobileMenu() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <header className={`header--global ${this.state.visible ? 'show-menu-mobile': ''}`}>
        <div className="header__top">
          <div className="logo-container">
            <NoSSR>
              <Logo
                imageSrc="https://image.flaticon.com/icons/svg/854/854917.svg"
                imageAlt="Cobi Application"/>  
            </NoSSR>
          </div>
          <div className={`navbar-burger burger mobile-only ${this.state.visible ? 'is-active': ''}`} 
              onClick={this.toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span> 
          </div>
        </div>
        <div className="header__bottom">
          <div className="logo-container">
            <NoSSR>
              <Logo
                imageSrc="https://image.flaticon.com/icons/svg/854/854917.svg"
                imageAlt="Cobi Application"/>  
            </NoSSR>
          </div>
          <div className="menu-items">
            <div className="menu-item">
              <Link href='/'>
                <a className="navbar-item" href='/'> Home </a>
              </Link>
            </div>
            <div className="menu-item">
              <Link href='/explore'>
                <a className="navbar-item" href='/explore'> Explore </a>
              </Link>
            </div>
            <div className="menu-item">
              <Link href='/history'>
                <a className="navbar-item" href='/history'> History </a>
              </Link>
            </div>
            <div className="menu-item">
              <Link href='/about'>
                <a className="navbar-item" href='/about'> About </a>
              </Link>
            </div>
            <div className="menu-item">
              <Link href='/blog'>
                <a className="navbar-item" href='/blog'> Blog </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}