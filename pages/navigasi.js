import Link from 'next/link'
import React from 'react'

export default function navigasi() {
  return (
    <div className='container bg-warning p-5'>
      <Link href='/'> home</Link>
      <Link href='/recipe/1'> recipe</Link>
      <Link href='/addRecipe'> addRecipe</Link>
      <Link href='/changeP'> ChangePassword</Link>
      <Link href='/detailVidio'> detailVidio</Link>
      <Link href='/forgotPassword'> forgotPassword</Link>
      <Link href='/likedRecipe'> likedRecipe</Link>
      <Link href='/login'> login</Link>
      <Link href='/profile'> profile</Link>
      <Link href='/register'> register</Link>
      <Link href='/reset'> reset</Link>
      <Link href='/savedRecipe'> savedRecipe</Link>
    </div>
  )
}
