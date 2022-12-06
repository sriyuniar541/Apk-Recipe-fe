import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../componen/Footer'
import Navbar from '../../componen/Navbar'
import { useRouter } from 'next/router'


export default function DetailRecipe() {

const router = useRouter() 
const {id} = router.query

const [getId,setGetId] = useState([])
const apiId = `http://localhost:4001/recipe/${id}`

useEffect(()=>{
  axios.get(apiId)
  .then((result)=> {
    result.data && setGetId(result.data.data)
  })
  .catch((err)=> {
    console.log(err.message)
  })
 
},[id])

console.log(getId)

  return (
    <div>
      <Navbar/>
      <div className='container'>
        {getId.map((p)=>(
        <><div className='text-center'>
            <h1>Loream Sandwich {p.title} id : {id}</h1>
            <img src={p.photo} alt='' style={{ width: '50%', height: '10%' }} />
          </div><div className='col-11 offset-1 mt-5'>
              <h4>Ingredients </h4><ul>
                <li>{p.ingredients}</li>
                <li>2 tbsp mayonnaise</li>
                <li>3 slices bread</li>
                <li>a little butter</li>
                <li>⅓ carton of cress</li>
                <li>2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese</li>
                <li>crisps , to serve</li>
              </ul><h4 className='mt-5'>Vidio Step</h4><img src='/vd.png' alt='' style={{ width: '20%' }} className='mb-3' /><br /><img src='/vd.png' alt='' style={{ width: '20%' }} className='mb-3' /><br /><img src='/vd.png' alt='' style={{ width: '20%' }} className='mb-3' /><div className='col-12 text-center'>
                <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="6" placeholder='comment'></textarea>
                <button className='btn btn-warning text-white col-3'>Post</button>
              </div>
            </div></>
            ))} 
            <div className='container col-12 offset-1'>
              <div style={{ marginBottom: '20%', marginTop: '5%' }}>
                  <h4 className='mb-5'>Comment</h4>
                <div className='d-flex mb-5' style={{lineHeight:'20%'}}>
                    <img src='/lk.png' alt=''className='mb-3' style={{widows:'40%'}} />
                    <div className='mr-5' style={{marginLeft:'2%'}}>
                      <p st>Sri Yuniar</p>
                      <p>Nice recipe. simple and delicious, thankyou</p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
        <Footer/>     
    </div>   
  )
}

