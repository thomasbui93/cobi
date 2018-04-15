import Link from 'next/link'

export default () => {
  return (
    <header>
      <nav className="k-menu">
        <Link href="/" ><a className="k-menu__item">Home</a></Link>
        <Link href="/blog" ><a className="k-menu__item">Blog</a></Link>
      </nav>
    </header>
  )
}