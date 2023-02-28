import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div
      className='bg-warning text-center'
      style={{
        width: '100%',
        height: '341px',
        padding: '100px'
      }}
    >
      <h1
        style={{ color: '#2E266F' }}>
        Eat, Cook, Repeat
      </h1>
      <p style={{ color: '#707070' }}>
        Share your best recipe by uploading here !
      </p>
      <div
        className='d-flex justify-content-center mt-5'
        style={{ color: '#707070' }}
      >
        <Link href='#'>
          <p className='p-lg-4 p-1'>
            Product
          </p>
        </Link>
        <Link href='#'>
          <p className='p-lg-4 p-1'>
            Company
          </p>
        </Link>
        <Link href='#'>
          <p className='p-lg-4 p-1'>
            Learn more
          </p>
        </Link>
        <Link href='#'>
          <p className='p-lg-4 p-1'>
            Get in touch
          </p>
        </Link>
      </div>
    </div>
  )
}
