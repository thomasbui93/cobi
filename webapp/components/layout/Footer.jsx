import Link from "next/link"
import React from 'react'

export default class Footer extends React.Component {
  toggleState() {
    console.log('toggle state')
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__block">
          <h5 className="footer__head" onClick={this.toggleState}>About</h5>
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
        </div>
        <div className="footer__block">
          <h5 className="footer__head" onClick={this.toggleState}>Resources</h5>
          <div className="footer__list">
            <Link href="/blog">
              <a className="footer__item">Blog</a>
            </Link>
            <Link href="/user-community">
              <a className="footer__item">User Community</a>
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}