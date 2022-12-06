import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../componen/Footer'
import Navbar from '../componen/Navbar'


export default function AddRecepi() {
  const apiInsert = 'http://localhost:4001/recipe'
  const [inputData, setInputData] = useState({
    id: 2,
    title: '',
    ingredients: '',
    vidio: '',
    photo: '',
    description: 'description',
    comment: 1
  })


  const postForm = (e) => { 
    e.preventDefault()
    const formData = new FormData()
    formData.append("photo", inputData.photo)
    formData.append("title", inputData.title)
    formData.append("ingredients", inputData.ingredients)
    formData.append("vidio", inputData.vidio)
    console.log(formData)
    axios.
      post(apiInsert, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin":'*'
        },
      })
      .then((result) => {
        console.log(result, 'insert data success')
      })
      .catch((err) => {
        console.log(err.message, 'insert data fail')
      
          
    })
  }



return (
  <div>
    <Navbar />
    <form className='container ' onSubmit={postForm}>
      <div className='col-10 offset-1'>
        <input type='file' name='photo' className="form-control mb-3" id="exampleFormControlInput1" placeholder="photo" style={{ backgroundColor: '#F6F5F4' }} accept='image/*' value={inputData.photo} onChange={((e) => { setInputData(e.target.files[0]) })} />
        <input type="text" name='title' className="form-control mb-3" id="exampleFormControlInput1" placeholder='title' style={{ backgroundColor: '#F6F5F4' }} value={inputData.title} onChange={(e) => { setInputData(e.target.value) }} />
        <textarea className='form-control mb-3' id="exampleFormControlTextarea1" rows="3" type='text' placeholder='Ingredients' style={{ width: '100%', paddingBottom: '10%', paddingTop: '10%', backgroundColor: '#F6F5F4' }} value={inputData.ingredients} onChange={(e) => { setInputData(e.target.value) }} name='Ingredients' />
        {/* <input type="file" name='vidio' className="form-control mb-3" id="exampleFormControlInput1" placeholder="vidio"style={{backgroundColor:'#F6F5F4'}} value={vidio} onChange={((e)=>{setVidio(e.target.files[0])})} /> */}
        <input type="text" name='vidio' className="form-control mb-3" id="exampleFormControlInput1" placeholder='vidio' style={{ backgroundColor: '#F6F5F4' }} value={inputData.vidio} onChange={(e) => { setInputData(e.target.value) }} />
        <div className='col-8 offset-4'>
          <button type='submit' className='btn btn-warning mb-3 text-white' style={{ width: '40%' }}>Post</button>
        </div>

      </div>
    </form>
    <Footer />
  </div>
)
}

