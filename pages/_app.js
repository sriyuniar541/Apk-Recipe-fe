import 'bootstrap/dist/css/bootstrap.css'
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
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
