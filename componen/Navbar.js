import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Import.module.css'

export default function Navbar() {
  return (
    <div className='col-12'>
      <div className='container py-lg-4'>
        <div className='row'>
            <div className='col-11'>
                <Link href='/' className='text-primary'><b>Home</b></Link>
                <Link href='/addRecipe'className='px-3 text-primary'><b>Add Recepi</b></Link>
                <Link href='profile'className='px-3 text-primary'><b>Profile</b> </Link>
            </div>
            <div className='col-1 d-flex'>
                <Link href='profile' ><Image src='/lk.png' alt='' width={40} height={40}/></Link>
                <p className=''>users</p>
            </div>  
        </div>
      </div>
    </div>
    
  )
}

