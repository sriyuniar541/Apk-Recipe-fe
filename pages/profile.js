/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import FotterP from '../componen/fotterP'
import Navbar from '../componen/navbar'
import CardProfile from '../componen/cardProfile'


export default function Profile () {

const apiUser = `http://localhost:4001/users/1`
const [user,setUsers] = useState([])

useEffect(()=>{
  axios.get(apiUser)
  .then((result)=> {
    result.data && setUsers(result.data.data)
  })
  .catch((err)=> {
    console.log(err)
  })

},[])

  return (
    <div>
      <Navbar/>
      {user.map((u)=> (
      <><div className='container text-center' style={{ marginTop: '5%', marginBottom: '5%' }} key={u.id}>
          <img src='/p1.png' alt='' style={{}} />
          <Link href='/changeP'><button className='btn btn-outline-light' style={{ marginTop: '12%' }}><img src='/ed.png' alt='' /></button> </Link>
          <h6 className='mt-3'style={{ marginRight: '5%'}}>{u.name}</h6>
        </div>
        <div className='container'>
            <Link href='/myRecipe' className='px-3'>My Recipe</Link>
            <Link href='/savedRecipe' className='px-3'>Saved Recipe</Link>
            <Link href='/likedRecipe' className='px-3'>Liked Recipe</Link>
          </div>
          <hr/>
          <div className='container'>
            <div className='row'>
                <CardProfile/>
                <CardProfile/>
            </div>
        </div> 
      </>
      ))}
        <FotterP/>
    </div> 
  )
}

 
