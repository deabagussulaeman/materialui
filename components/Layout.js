import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children, title = 'Dea Blog'}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Header />
          {children}
          <br /><br /><br />
        <Footer />
    </div>
  )
}