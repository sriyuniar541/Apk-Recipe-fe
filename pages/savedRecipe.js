import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../componen/Navbar'
import CardProfile from '../componen/cardProfile'
import FotterP from '../componen/fotterP'


export default function SavedRecipe() {
  const token = JSON.parse(localStorage.getItem('token'))
  const userData = JSON.parse(localStorage.getItem('data'))
  const apiUser =  `https://courageous-lime-jaguar.cyclic.app/users/${userData.id}`
  const [user, setUsers] = useState([])
  const [like, setLike] = useState([])

  useEffect(() => {
    axios.get(apiUser)
      .then((result) => {
        result.data && setUsers(result.data.data)
        // alert('get data success');
      })
      .catch((err) => {
        console.log(err)
        alert('get data success');
      })

  }, [])


  //hanya yang sudah login yg blh ke sini
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/login')
      alert('please login')
    }
  })

  const myrecipe = () => {
    axios.get(`https://courageous-lime-jaguar.cyclic.app/savedRecipe`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((result) => {
        result.data && setLike(result.data.data)
        console.log(result.data.data, 'ini data like')
        // alert('get like success');
      })
      .catch((err) => {
        console.log(err)
        alert('get like fail');
      })
  }

  const handleDelete = (id) => {
    axios.delete(`https://courageous-lime-jaguar.cyclic.app/savedRecipe/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((result) => {
        result.data && setLike(result.data.data)
        console.log(result.data.data, 'ini data like')
        alert('delete saved success');
        myrecipe()
      })
      .catch((err) => {
        console.log(err)
        alert('delete saved fail');
      })
  }

  useEffect(() => {
    myrecipe()
    console.log(like)
  }, [])


  


  return (
    <div>
      <Navbar />
      <>
        {user.map((u) => (
          <div className='container text-center' style={{ marginTop: '5%', marginBottom: '5%' }} key={u.id}>
            <img src={u.photo} alt='' style={{ borderRadius: '50%', width: '172px', height: '172px' }} />
            <Link href='/changeP'><button className='btn btn-outline-light' style={{ marginTop: '12%' }}><img src='/ed.png' alt='' /></button> </Link>
            <h6 className='mt-3' style={{ marginRight: '5%' }}>{u.name}</h6>
          </div>
        ))}
        <div className='container'>
          {/* menu */}
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <Link href='/profile' className='px-3'>My Recipe</Link>
            </li>
            <li class="nav-item">
              <Link href='/savedRecipe' className='px-3'>Saved Recipe</Link>
            </li>
            <li class="nav-item">
              <Link href='/likedRecipe' className='px-3'>Liked Recipe</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className='container'>
          <div className='row d-flex justify-content-start '>
            {like.map((p) => (
              <>
                <div className='col-6 col-lg-2 mx-lg-3 mb-3'>
                  <img src={p.recipe_photo} alt='insert gambar' width={200} height={200} className='image-fluid' />
                  <button className='btn btn-danger me-3' onClick={()=> handleDelete(p.id)}>Delete</button>
                  <Link href={`/recipe/${p.recipe_id}`}> <button className='btn btn-warning text-white'>View</button></Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
      <FotterP />
    </div>
  )
}


