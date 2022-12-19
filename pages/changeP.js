/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../componen/Navbar'
import CardProfile from '../componen/cardProfile'
import FotterP from '../componen/fotterP'
import { useRouter } from 'next/router'
import axios from 'axios'


export default function ChangeP() {
 
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState('')
 
  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPassword({ ...password, [name]: value })
  }

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
  }

  const formPost = async (e) => {
    e.preventDefault()  
    const formData = new FormData()
    formData.append ('password',password)
    formData.append ('photo',photo)
    console.log(formData)
    const res = axios.put(`http://localhost:4001/users/update/1`,formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(res => {console.log(res, 'update data success')
    alert('update data success');
    router.push('/profile')
  })
    .catch( (err) => {
    console.log(err.message, 'update data fail')
    alert('update data fail');
    })
  }


  //hanya yang sudah login yg blh ke sini
    useEffect (()=>{
    if(!localStorage.getItem('token')){
        router.push('/login')
        alert('please login')
    }
  })



  return ( 
    <div>
      <Navbar />
        <><div className='container text-center' style={{ marginTop: '5%', marginBottom: '5%' }} >
          <form onSubmit={formPost}>
            <button className='btn btn-outline-light' style={{ marginTop: '12%' }}><img src='/ed.png' alt='' /></button>
            <div className='col-3 offset-4 mt-3'>
              <input type="file" name='photo' className="form-control" id="FormControl" style={{ backgroundColor: '#E7E7E7' }}  placeholder="Change Photo"  onChange={handlePhoto} />
              <input type='text' name='password' className="form-control mb-3" placeholder="Change Password" style={{ backgroundColor: '#E7E7E7' }}  onChange={onChangeHandler} /> 
            </div>
          </form>
        </div>
          <div className='container'>
            <Link href='/profile' className='px-3'>My Recipe</Link>
            <Link href='/savedRecipe' className='px-3'>Saved Recipe</Link>
            <Link href='/likedRecipe' className='px-3'>Liked Recipe</Link>
          </div>
          <hr />
          <div className='container'>
            <div className='row'>
              <CardProfile />
              <CardProfile />
            </div>
          </div>
        </>
      <FotterP />
    </div>
  )
}


