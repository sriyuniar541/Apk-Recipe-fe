import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { GlobalConten } from '../pages/contenApi/globalConten'
import { useRouter } from 'next/router'


export default function PrifileCard() {
  const router = useRouter()
  //mengimpor function dari GlobalConten
  const {user} = useContext(GlobalConten)
  console.log( 'ini data dari login', user)
  return (
    <div>
      <div className='container text-center' style={{ marginTop: '5%', marginBottom: '5%' }} >
        <img src={user? user.photo : 'data not found'} className='image-fluid' alt='' style={{ borderRadius: '50%', width: '172px', height: '172px' }} />
        <Link href='/changeP'><button className='btn btn-outline-light' style={{ marginTop: '12%' }}><img src='/ed.png' alt='' /></button> </Link>
        <h6 className='mt-3' style={{ marginRight: '5%' }}>{user? user.name : 'data not found'}</h6>
      </div>
    </div>
  )
}
