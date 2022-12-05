import React from 'react'
import Link from 'next/link'

export default function FotterP() {
  return (
    <div className='col-12 bg-warning text-center'>
              <div className='d-flex justify-content-center mt-5'style={{color:'#707070',paddingBottom:'3%',paddingTop:'3%'}}>
                <Link href='#'><p className='p-lg-4 p-1'>Product</p></Link>
                <Link href='#'><p className='p-lg-4 p-1'>Company</p></Link> 
                <Link href='#'><p className='p-lg-4 p-1'>Learn more</p></Link>
                <Link href='#'><p className='p-lg-4 p-1'>Get in touch </p></Link>
              </div>
        </div>
  )
}
