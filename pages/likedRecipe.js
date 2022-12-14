/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../componen/Navbar'
import CardProfile from '../componen/cardProfile'
import FotterP from '../componen/fotterP'


export default function LikedRecipe () {

const apiUser = `http://localhost:4001/users/1`
const [user,setUsers] = useState([])

useEffect(()=>{
  axios.get(apiUser)
  .then((result)=> {
    result.data && setUsers(result.data.data)
    alert('get data success');
  })
  .catch((err)=> {
    console.log(err)
    alert('get data success');
  })

},[])

  return (
    <div>
      <Navbar/>
      {user.map((u)=> (
      <><div className='container text-center' style={{ marginTop: '5%', marginBottom: '5%' }} key={u.id}>
          <img src={u.photo} alt='' style={{borderRadius:'50%',width:'172px',height:'172px'}} />
          <Link href='/changeP'><button className='btn btn-outline-light' style={{ marginTop: '12%' }}><img src='/ed.png' alt='' /></button> </Link>
          <h6 className='mt-3'style={{ marginRight: '5%'}}>{u.name}</h6>
        </div>
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
          <hr/>
          <div className='container'>
            <div className='row '>
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

 
