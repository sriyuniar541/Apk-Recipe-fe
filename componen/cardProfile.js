import React from 'react'
import Image from 'next/image'

export default function CardProfile(props) {
  return (
    <div className='col-lg-3 col-6'>
        <Image src={props.src} alt='insert gambar' width={250} height={200}/>   
    </div>
  )
}
