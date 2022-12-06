import React from 'react'
import Image from 'next/image'
import styles from '../styles/Import.module.css'
import Form from '../componen/form'
import Link from 'next/link'




export default function  Register () {
  return (
    <div className=''>
      <div className='row'>
        <div className='col-6 text-center'>
          <div className={styles.g}>
              <div className={styles.g1} >
                <Image src='/bg2.png' width={700} height={550} alt='' style={{paddingTop:'50%',paddingBottom:'50%'}}/>
              </div>
          </div>
        </div>
        
        <div className='col-lg-6 p-5' style={{width:'100',boxSizing:'border-box'}}>
            <div className='text-center mb-5'>
              <h1 style={{color:'#EFC81A'}}>Let’s Get Started !</h1>
            <p style={{color:'#8692A6'}}>Create new account to access all features</p>
          </div> 
          <Form label='Name' placeholder='Name'/>
          <Form label='Email address*' placeholder='Email address*'/>
          <Form label='Phone Number' placeholder='Phone Number'/>
          <Form label=' Create New Password' placeholder=' Create New Password'/>
          <Form label='New Password' placeholder='New Password'/>
          <div className="form-check mt-3 text-center col-lg-6 offset-lg-3" style={{color:'#8692A6'}}>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
              <label className="form-check-label" for="defaultCheck1">
              I agree to terms & conditions
              </label> 
          </div>
          
          <button className='btn btn-warning col-lg-6 offset-lg-3 mt-5 text-white'>Register Account</button>
          <p className='mt-3 text-center' style={{color:'#8692A6'}}>Already have account? <Link href='/login' className='text-warning'>Log in Here</Link></p>
         
        </div>
      </div>
    </div>
  )
}
