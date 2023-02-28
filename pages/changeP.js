/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../componen/Navbar'
import CardProfile from '../componen/cardProfile'
import FotterP from '../componen/fotterP'
import { useRouter } from 'next/router'
import axios from 'axios'


export default function ChangeP() {
  let [token] = useState('')
  let user = ''
  if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('token'))
    user = JSON.parse(localStorage.getItem('data'))
  }

  const [data, setData] = useState([])
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState(null)
  console.log(data, 'dari change password')

  const apiRecepi = `https://courageous-lime-jaguar.cyclic.app/users/${user.id}`
  useEffect(() => {
    axios.get(apiRecepi)
      .then((result) => {
        result.data && setData(result.data.data[0])
        console.log(result.data.data[0], 'ini data user')
        // alert('get data success');
      })
      .catch((err) => {
        console.log(err)
        alert('get data fail');
      })
  }, [])

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
  }

  const formPost = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('password', password)
    formData.append('photo', photo)
    console.log(formData)
    const res = axios.put(`https://courageous-lime-jaguar.cyclic.app/users/update/${user.id}`, formData, {
      'Content-Type': 'multipart/form-data',
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        console.log(res, 'update data success')
        alert('update data success');
        router.push('/profile')
      })
      .catch((err) => {
        console.log(err.message, 'update data fail')
        alert('update data fail');
      })
  }

  //hanya yang sudah login yg blh ke sini
  //   useEffect (()=>{
  //   if(!localStorage.getItem('token')){
  //       router.push('/login')
  //       alert('please login')
  //   }
  // })



  return (
    <div>
      <Navbar />
      <><div className='container text-center'
        style={{ marginTop: '5%', marginBottom: '5%' }}
      >
        <form onSubmit={formPost}>
          <img
            src={data ? data.photo : 'data not found'}
            className='image-fluid'
            alt=''
            style={{
              borderRadius: '50%',
              width: '172px',
              height: '172px'
            }}
          />
          <button className='btn btn-outline-light'
            style={{ marginTop: '12%' }}>
            <img src='/ed.png' alt='' />
          </button>
          <div className='col-3 offset-4 mt-3'>
            <input
              type="file"
              name='photo'
              className="form-control"
              id="FormControl"
              style={{ backgroundColor: '#E7E7E7' }}
              placeholder="Change Photo"
              onChange={handlePhoto}
            />
            <input
              type='password'
              name='password'
              className="form-control mb-3"
              placeholder="Change Password"
              minLength='8' 
              maxLength='20'
              style={{ backgroundColor: '#E7E7E7' }}
              onChange={((e) => { setPassword(e.target.value) })}
            />
          </div>
        </form>
      </div>
        <div className='container'>
          <Link href='/profile' className='px-3'>
            My Recipe
          </Link>
          <Link href='/savedRecipe' className='px-3'>
            Saved Recipe
          </Link>
          <Link href='/likedRecipe' className='px-3'>
            Liked Recipe
          </Link>
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


