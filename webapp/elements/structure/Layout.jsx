import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import './../../styles/app.scss'
import Footer from './../global/Footer'
import Header from './../global/Header'

export default ({ children, title = 'Cobi Application' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header/>
    {children}
    <Footer/>
  </div>
)