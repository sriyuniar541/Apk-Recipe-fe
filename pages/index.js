import styles from '../styles/Import.module.css'
import Navbar from '../componen/navbar'
import Image from 'next/image'
import Footer from '../componen/footer'
//import Header from '../componen/Head'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'





export default function Home() {

const [get,setGet] = useState([])
const apiRecepi = 'http://localhost:4001/recipe'

useEffect(()=>{
  axios.get(apiRecepi)
  .then((result)=> {
    result.data && setGet(result.data.data)
  })
  .catch((err)=> {
    console.log(err)
  })
},[])

  return (
    <div className={styles.container_fluid}>
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
           <Navbar/>
            <div className='d-flex justify-content-between'>
                <div className='col-5' style={{paddingTop:'20%',paddingBottom:'20%'}}>
                    <h2 className={styles.fo}>Discover Recipe & Delicious Food</h2>
                    <input type="name" className='form-control' id="search" placeholder='Search Recipe' style={{height:'auto'}}>
                  </input>
                </div>
                <div className='col-7'>
                  <img src='/g2.png' alt='' style={{width:'30%',marginLeft:'20%',zIndex:3,position:'absolute'}}/>
                    {/* <Image src='/g2.png' alt='' width={200} height={200} className='text-end'/> */}
                </div>
            </div>
          </div>
        <div className='col-3 '>
          <img src='/k1.png' alt='' style={{width:'100%',zIndex:2,position:'relative'}}/>
        </div>
        </div>
        
      </div>
      <div className='container d-flex'>
        <img src='/k2.png' alt=''/>
        <h3 style={{paddingTop:'5%',paddingBottom:'5%'}}>Popular For You !</h3>
      </div>
      <div className='container mt-5 mb-5'>
      <div className='row'>
          {get.map((p)=>(
          // eslint-disable-next-line react/jsx-key
          <div className='col-4 mt-5'>
            <Link href={`/recipe/${p.id}`} key={p.id}>
              <img src={p.photo} alt=''style={{width:'100%'}}/>
              </Link>
          </div>
          ))} 
        </div>
      </div>
      <div className='container mt-5 d-flex'>
        <img src='/k2.png' alt=''/>
        <h3 style={{paddingTop:'5%',paddingBottom:'5%'}}>New Recipe</h3>
      </div>
      <div className='container mt-5'>
        <div className='row d-flex justify-content-between '>
          <div className='col-4 '>
              <img src='/g5.png' alt=''style={{width:'25%',zIndex:3,position:'absolute',marginLeft:'3%',marginTop:'3%'}}/>
              <img src='/k3.png' alt=''style={{width:'80%',height:'80%',zIndex:2,position:'relative'}}/>
          </div>
          <div className='col-4'style={{paddingTop:'10%',paddingBottom:'10%'}}>
            <h4>Healthy Bone Broth Ramen (Quick & Easy)</h4>
            <hr/>
            <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
           <Link href='/recipe/1'><button className='btn btn-warning text-white'>Learn More</button></Link>
          </div>
        </div>
      </div>
      <div className='container d-flex mb-5'>
        <img src='/k2.png' alt=''/>
        <h3 style={{paddingTop:'5%',paddingBottom:'5%'}}>Popular Recepi</h3>
      </div>
      <div className='container mb-5'>     
        <div className='row'>
          {get.map((p)=>(
          // eslint-disable-next-line react/jsx-key
          <div className='col-4 mt-5'>
            <Link href={`/recipe/${p.id}`} key={p.id}>
              <img src={p.photo} alt=''style={{width:'100%'}}/>
              </Link>
          </div>
          ))} 
        </div>    
      </div > 
      <Footer/>
    </div>
  )
}
