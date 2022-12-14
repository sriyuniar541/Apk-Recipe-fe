import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import GlobalProvider from './contenApi/globalConten'


function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
    <Component {...pageProps} />
   </GlobalProvider>
  )
   
}

export default MyApp
