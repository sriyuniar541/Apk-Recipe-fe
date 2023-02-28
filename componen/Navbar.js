import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


export default function Navbar() {
  const router = useRouter()
  const [data, setData] = useState([])
  let logout = () => { }
  let user = ''

  if (typeof window !== 'undefined') {
    user = JSON.parse(localStorage.getItem('data'))
    logout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('data')
      router.push('/login')
    }
  }

  const apiRecepi = `https://courageous-lime-jaguar.cyclic.app/users/${user.id}`
  useEffect(() => {
    axios.get(apiRecepi)
      .then((result) => {
        result.data && setData(result.data.data[0])
        console.log(result.data.data[0], 'ini data navbar')
        // alert('get data success');
      })
      .catch((err) => {
        console.log(err)
        alert('get data fail');
      })
  }, [])




  return (
    <div className=' container-fluid' 
      style={{ backgroundColor: '#FFF5EC' }}
    >
      <div className='container-fluid'>
        <div className='row py-3'>
          <div className='col-lg-6 col-8 py-2 px-lg-4'>
            <Link href='/Home' className='text-primary'>
              <b>Home</b>
            </Link>
            <Link href='/addRecipe' className='px-3 text-primary'>
              <b>Add Recepi</b>
            </Link>
            <Link href='/profile' className='px-3 text-primary'>
              <b>Profile</b> 
            </Link>
          </div>
          <div className='col-lg-3 col-4  d-flex justify-content-end offset-lg-3'>
            <Link href='/profile'>
              <img src={data ? data.photo : 'data not found'}
                alt='' width={40}
                height={40}
                style={{ borderRadius: '50%' }}
                className='mt-lg-1 mt-1' />
            </Link>
            <p className='px-2 text-primary mt-2'>
              <b>{data ? data.name : 'data not found'}</b>
            </p>
            <button
              className=' btn btn-white text-primary mb-lg-3 mb-5'
              onClick={logout}>
              <b>logout</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

