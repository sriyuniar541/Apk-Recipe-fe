import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../componen/Navbar'
import FotterP from '../componen/fotterP'
import { GrView } from "react-icons/gr"
import { RiDeleteBin5Line } from "react-icons/ri";


export default function SavedRecipe() {
  let token = ''
  let userData = ''

  if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('token'))
    userData = JSON.parse(localStorage.getItem('data'))
  }
  const apiUser = `https://courageous-lime-jaguar.cyclic.app/users/${userData.id}`
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
      {user.map((u) => (
        <div className='container text-center'
          style={{ marginTop: '5%', marginBottom: '5%' }}
          key={u.id}
        >
          <img
            src={u.photo}
            alt='My photo'
            style={{
              borderRadius: '50%',
              width: '172px',
              height: '172px'
            }}
          />
          <Link href='/changeP'>
            <button
              className='btn btn-outline-light'
              style={{ marginTop: '12%' }}>
              <img src='/ed.png' alt='' />
            </button>
          </Link>
          <h6
            className='mt-3'
            style={{ marginRight: '5%' }}>
            {u.name}
          </h6>
        </div>
      ))}
      <div className='container'>
        {/* menu */}
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link href='/profile'
              className='px-3'>
              My Recipe
            </Link>
          </li>
          <li class="nav-item">
            <Link href='/savedRecipe'
              className='px-3'>
              Saved Recipe
            </Link>
          </li>
          <li class="nav-item">
            <Link href='/likedRecipe'
              className='px-3'>
              Liked Recipe
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className='container'>
        <div className='row d-flex justify-content-start '>
          {like.map((p) => (
            <>
              <div className='col-6 col-lg-2 mx-lg-3 mb-3'>
                <div className='card border-white'>
                  <img
                    src={p ? p.recipe_photo : 'data not found'}
                    className='card-img'
                    alt='recipe'
                    style={{ width: '200px', height: '200px' }} />
                  <div className='card-img-overlay d-flex align-items-end justify-content-end '>
                    <div className='butoon opacity-75'>
                      <button
                        className='btn btn-light me-2 px-3'
                        onClick={() => handleDelete(p.id)}>
                        <RiDeleteBin5Line />
                      </button>
                      <Link href={`/recipe/${p.recipe_id}`}>
                        <button className='btn btn-light text-white'>
                          <GrView />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <FotterP />
    </div>
  )
}


