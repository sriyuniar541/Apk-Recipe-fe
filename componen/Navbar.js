import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { GlobalConten } from '../pages/contenApi/globalConten'
import { useRouter } from 'next/router'


export default function Navbar() {
  const router = useRouter()
  //mengimpor function dari GlobalConten
  const {adminLogout, data} = useContext(GlobalConten)
  console.log( 'ini data dari login',data)

  //membuat logout function dibuat di GlobalConten
  const logout = () => {
    adminLogout()
  }

  // useEffect (()=>{
  //   if(!localStorage.getItem('token')){
  //       router.push('/')
  //   }
  // })


  return (
    <div className='col-12 '>
      <div className='container py-lg-4'>
        <div className='row'>
            <div className='col-11'>
                <Link href='/' className='text-primary'><b>Home</b></Link>
                <Link href='/addRecipe'className='px-3 text-primary'><b>Add Recepi</b></Link>
                <Link href='profile'className='px-3 text-primary'><b>Profile</b> </Link>
            </div>
            <div className='col-1 d-flex'>
                {/* <Link href='profile' ><Image src={data.photo} alt='' width={40} height={40}/></Link> */}
                <Link href='profile' ><Image src='/bg.png' alt='' width={40} height={40}/></Link>
                <p className=''> {data.name} </p>
                <button onClick={logout}>logout</button> 
            </div> 
        </div>
      </div>
    </div>
    
  )
}

