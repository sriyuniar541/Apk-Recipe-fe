import Header from '../componen/Header'
import Footer from '../componen/Footer'
import Navbar from '../componen/Navbar'


export default function Layout({children}) {
  return (
    <div>
      <Header/>
    <Navbar/>
      <div>{children}</div>
     <Footer/>
    </div>
  )
}
