import React from 'react'
import Link from 'next/link'
import FotterP from '../componen/fotterP'
import Navbar from '../componen/Navbar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { GrView } from "react-icons/gr"
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Profile() {
  let token = ''
  let user = ''
  const router = useRouter()
  const [data, setData] = useState([])
  const [recipe, setRecipe] = useState([])
  console.log(data, 'dari profile')

  if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('token'))
    user = JSON.parse(localStorage.getItem('data'))
  }

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

  const myrecipe = () => {
    axios.get(`https://courageous-lime-jaguar.cyclic.app/recipe/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((result) => {
        result.data && setRecipe(result.data.data)
        console.log(result.data.data, 'ini data my recipe')
        // alert('get my recipe success');
      })
      .catch((err) => {
        console.log(err)
        alert('get my recipe fail');
      })
  }

  useEffect(() => {
    myrecipe()
    console.log(recipe.id, 'data recipe')
  }, [])



  const handleDelete = (id) => {
    axios.delete(`https://courageous-lime-jaguar.cyclic.app/recipe/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((result) => {
        alert('delete recipe success');
        myrecipe()
      })
      .catch((err) => {
        console.log(err)
        alert('delete recipe fail');
      })
  }


  return (
    <div>
      <div>
        <Navbar />
        <>
          <div className='container text-center'
            style={{ marginTop: '5%', marginBottom: '5%' }}
          >
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
            <Link href='/changeP'>
              <button
                className='btn btn-outline-light'
                style={{ marginTop: '12%' }}>
                <img src='/ed.png' alt='' />
              </button> </Link>
            <h6
              className='mt-3'
              style={{ marginRight: '5%' }}>
              {data ? data.name : 'data not found'}
            </h6>
          </div>
          {/* <PrifileCard/> */}
          <div className='container'>
            {/* menu */}
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link href='/profile' className='px-3'>
                  My Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/savedRecipe'
                  className='px-3'>
                  Saved Recipe
                </Link>
              </li>
              <li className="nav-item">
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
              {recipe.map((p) => (
                <>
                  <div className='col-6 col-lg-2 mx-lg-3 mb-3' key={p.id}>
                    <div className='card border-white'>
                      <img 
                        src={p ? p.photo : 'data not found'} 
                        className='card-img' 
                        alt='recipe' 
                        style={{ width: '200px', height: '200px' }} />
                      <div className='card-img-overlay d-flex align-items-end justify-content-end'>
                        <div className='butoon opacity-75'>
                          <button
                            className='btn btn-light me-2 px-3'
                            onClick={() => handleDelete(p.id)}>
                            <RiDeleteBin5Line />
                          </button>
                          <Link href={`/recipe/${p.id}`}>
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
        </>
        <FotterP />
      </div>
    </div>
  )
}







