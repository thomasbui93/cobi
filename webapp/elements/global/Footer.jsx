import Link from "next/link"
import React from 'react'
import Collapsible from './../general/Collapsible'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Collapsible title="About" className="footer__block">
          <div className="footer__list">
            <Link href="/motivation">
              <a className="footer__item">Motivation </a>
            </Link>
            <Link href="/history">
              <a className="footer__item">History</a>
            </Link>
            <Link href="/privacy">
              <a className="footer__item">Privacy</a>
            </Link>
            <Link href="/terms-and-conditions">
              <a className="footer__item">Terms and conditions</a>
            </Link>
          </div>
        </Collapsible>
        <Collapsible title="Resources" className="footer__block" >
          <div className="footer__list">
            <Link href="/blog">
              <a className="footer__item">Blog</a>
            </Link>
            <Link href="/user-community">
              <a className="footer__item">User Community</a>
            </Link>
          </div>
        </Collapsible>
      </footer>
    )
  }
}