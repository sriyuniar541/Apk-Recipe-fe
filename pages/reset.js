import React from 'react'
import Image from 'next/image'
import styles from '../styles/Import.module.css'
import Form from '../componen/form'





export default function  resetPassword () {
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
        
        <div className='col-lg-6 ' style={{paddingTop:'20%',paddingBottom:'20%'}}> 
          <Form label='Code 6 Digit' placeholder=''/>
          <button className=' text-center btn btn-warning col-lg-6 offset-lg-3 mt-4 text-white'>Reset Password</button>
        </div>
      </div>
    </div>
  )
}
