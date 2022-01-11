import '../styles/globals.css'
import 'bulma/css/bulma.css'

function MyApp({ Component, pageProps }) {
  return (
  <body className='column'>
    <Component {...pageProps} />
  </body>
  )
}

export default MyApp
