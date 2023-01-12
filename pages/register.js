import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Import.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'




export default function Register() {
  const router = useRouter()
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    phone_number: '',
    password: ''
  })

  const registerHandling = async (e) => {
    e.preventDefault()
    const {name, password, email, phone_number } = inputData
    const data = { name, password, email, phone_number }

    const res = await (await fetch('http://localhost:4001/users/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })).json()
    if (res.success) {
      alert(res.message);
      setInputData({
        name: '',
        email: '',
        phone_number: '',
        password: ''
      })
      localStorage.setItem('data', JSON.stringify(res.data))
      router.push('/otp')
    } else {
      alert(res.data, 'input data fail');
    }
  }

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputData({ ...inputData, [name]: value })
  }


  return (
    <div className=''>
      <div className='row'>
        <div className='col-6 text-center'>
          <div className={styles.g}>
            <div className={styles.g1} >
            </div>
          </div>
        </div>
        <form className='col-lg-6 p-3' style={{ width: '90', boxSizing: 'border-box' }} onSubmit={registerHandling}>
          <div className='text-center mb-5'>
            <h1 style={{ color: '#EFC81A' }}>Let’s Get Started !</h1>
            <p style={{ color: '#8692A6' }}>Create new account to access all features</p>
          </div>
          <div className='col-lg-6 offset-lg-3 mt-2'>
            <label className="form-label" style={{ color: '#8692A6' }}>Name</label>
            <input type='text' className="form-control" id="FormControl" placeholder='name' name="name" value={inputData.name} onChange={onChangeHandler} />
            <label className="form-label" style={{ color: '#8692A6' }}>Email</label>
            <input type='text' className="form-control" id="FormControl" name="email" placeholder='Email address' value={inputData.email} onChange={onChangeHandler} />
            <label className="form-label" style={{ color: '#8692A6' }}>phone_number</label>
            <input type='text' className="form-control" id="FormControl" name="phone_number" placeholder='Phone Number' value={inputData.phone_number} onChange={onChangeHandler} />
            <label className="form-label" style={{ color: '#8692A6' }}>password</label>
            <input type='text' className="form-control" id="FormControl" name="password" placeholder=' Create New Password' value={inputData.password} onChange={onChangeHandler} />
            <label className="form-label" style={{ color: '#8692A6' }}>New Password</label>
            <input type='text' className="form-control" id="FormControl" name="password" placeholder=' New Password' value={inputData.password} onChange={onChangeHandler} />
          </div>
            <div className="form-check mt-3 text-center col-lg-6 offset-lg-3" style={{ color: '#8692A6' }}>
            <input className="form-check-input" type="checkbox" id="defaultCheck1" />
            <label className="form-check-label">
              I agree to terms & conditions
            </label>
          </div>
          <button className='btn btn-warning col-lg-6 offset-lg-3 mt-5 text-white'>Register Account</button>
          <p className='mt-3 text-center' style={{ color: '#8692A6' }}>Already have account? <Link href='/login' className='text-warning'>Log in Here</Link></p>
        </form>
      </div>
    </div>
  )
}
