import React from 'react'
import Image from 'next/image'
import styles from '../styles/Import.module.css'
import Form from '../componen/form'




export default function  ForgotPassword () {
  return (
    <div className=''>
      <div className='row'>
        <div className='col-6 text-center'>
          <div className={styles.g}>
              <div className={styles.g1} >
                <Image 
                  src='/bg2.png' 
                  width={700} 
                  height={550} 
                  alt='' 
                  style={{paddingTop:'50%',paddingBottom:'50%'}}
                />
              </div>
          </div>
        </div>
        
        <div className='col-lg-6' 
          style={{
            width:'100',
            boxSizing:'border-box',
            paddingTop:'10%',
            paddingBottom:'10%'}}
          >
            <div className='text-center mb-5'>
              <h1 style={{color:'#EFC81A'}}>
                Forgot Password?
              </h1>
            <p style={{color:'#8692A6'}}>
              We just need your registered e-mail address<br/> 
              to send your password resend
            </p>
          </div> 
          <Form label='Email' placeholder='Email'/>
          <button 
            className=' text-center btn btn-warning col-lg-6 offset-lg-3 mt-4 text-white'>
            Send E-mail
          </button>
        </div>
      </div>
    </div>
  )
}
