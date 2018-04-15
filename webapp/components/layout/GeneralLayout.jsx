import Link from 'next/link'
import Head from 'next/head'

import './../styles/app.scss'
import Footer from './Footer'
import Header from './Header'

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