/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../componen/Navbar'
import CardProfile from '../componen/cardProfile'
import FotterP from '../componen/fotterP'


export default function ChangeP () {

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
          <button className='btn btn-outline-light' style={{ marginTop: '12%' }}><img src='/ed.png' alt='' /></button>
          <div className='col-3 offset-4 mt-3'>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Change Password" style={{backgroundColor:'#E7E7E7'}}/>
                <input type="file" className="form-control "style={{backgroundColor:'#E7E7E7'}}id="exampleFormControlInput1" placeholder="Change Photo"/>
          </div>
          
        </div>
        <div className='container'>
            <Link href='/profile' className='px-3'>My Recipe</Link>
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

 
