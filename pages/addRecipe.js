import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../componen/Footer'
import Navbar from '../componen/Navbar'
import { useRouter } from 'next/router'


export default function AddRecepi() {
  const navigate = useRouter()
  let [token] = useState('')

  if( typeof window !== 'undefined') { 
    token = (JSON.parse(localStorage.getItem('token'))) }
  const router = useRouter()
  const [photo,setPhoto] = useState(null)
  const [post,setPost] = useState({
      "title": "",
      "ingredients": "",
      "vidio": "",
      "description": 'description',
  })

const handleImage = (e) => {
  const file = e.target.files[0]
   setPhoto(file)
} 

const handlePost =  (e) => {
  e.preventDefault()
  const formData = new FormData()
  formData.append ('title',post.title)
  formData.append ('ingredients',post.ingredients)
  formData.append ('vidio',post.vidio)
  formData.append ('photo',photo)
  formData.append ('description',post.description)
  console.log(formData)

  axios.post('https://courageous-lime-jaguar.cyclic.app/recipe',formData, {
    'Content-Type': 'multipart/form-data' ,
    headers : { Authorization : `Bearer ${token}`}
  })
      .then(res => {console.log(res, 'input data success')
        alert('input data success');
        navigate.push('/search')
       
      }) 
      .catch( (err) => {
      console.log(err.message, 'input data fail')
      alert('input data fail');
      })
}


const onChangeHandler = (e) => {
  const name = e.target.name
  const value = e.target.value
  setPost({ ...post, [name]: value })
}

//  //hanya yang sudah login yg blh ke sini
// useEffect (()=>{
//   if(!localStorage.getItem('token')){
//       router.push('/login')
//       alert('please login')
//   }
// })

return ( 
  <div> 
    <Navbar />
    <form className='container'onSubmit={handlePost}>
        <div className='col-10 offset-1'>
          <input type='file' name='photo' className="form-control mb-3" placeholder="photo" style={{ backgroundColor: '#F6F5F4' }}  onChange={handleImage} required/>
          <input type="text" name='title' className="form-control mb-3"  placeholder='title' style={{ backgroundColor: '#F6F5F4' }}  value={post.title} onChange={onChangeHandler}/>
          <textarea className='form-control mb-3' rows="3" type='text' placeholder='Ingredients' style={{ width: '100%', paddingBottom: '10%', paddingTop: '10%', backgroundColor: '#F6F5F4' }} name='ingredients' value={post.ingredients} onChange={onChangeHandler}/>
          <input type="text" name='vidio' className="form-control mb-3"  placeholder='vidio' style={{ backgroundColor: '#F6F5F4' }} value={post.vidio} onChange={onChangeHandler}/>
          <div className='col-8 offset-4'>  
            <button type='submit' className='btn btn-warning mb-3 text-white' style={{ width: '40%' }} >Post</button>
          </div>
        </div>
    </form>
    <Footer />
  </div>
)
}
