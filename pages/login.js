import React from 'react'
import Image from 'next/image'
import styles from '../styles/Import.module.css'
import Form from '../componen/form'
import Link from 'next/link'
import Bacground from '../componen/bg'



export default function  Login () {
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
        
        <div className='col-lg-6' style={{width:'100',boxSizing:'border-box',paddingTop:'6%',paddingBottom:'6%'}}>
            <div className='text-center mb-5'>
              <h1 style={{color:'#EFC81A'}}>WELCOME</h1>
            <p style={{color:'#8692A6'}}>Log in into your exiting account</p>
          </div> 
          <Form label='Email address*' placeholder='Email address*'/>
          <Form label='Password' placeholder='Password'/>
          
          <div className="form-check mt-3 col-lg-6 offset-lg-3">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
              <label className="form-check-label" for="defaultCheck1">
              I agree to terms & conditions
              </label> 
          </div>
            <button className=' text-center btn btn-warning col-lg-6 offset-lg-3 mt-4 text-white'>Log in</button>
              <p className='mt-2 col-lg-6 offset-lg-6' style={{color:'#8692A6'}}>Forgot Password ?</p>
              <p className='mt-5 text-center' style={{color:'#8692A6'}}>Don’t have an account? <Link href='/register' className='text-warning'> Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}
