import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Footer from '../../componen/Footer'
import Navbar from '../../componen/Navbar'


export default function DetailRecipe() {
  let [token, setToken] = useState('')
  let userData = ''
  let user_id = ''

  if (typeof window !== 'undefined') {
    token = (JSON.parse(localStorage.getItem('token')))
    userData = JSON.parse(localStorage.getItem('data'))
    user_id = JSON.parse(localStorage.getItem('data'))
  }

  console.log('ini token', token)
  const [data, setData] = useState([])
  const [comment, setComment] = useState({ comment: '' })
  const [getcomment, setGetComment] = useState([])
  const userComment = user_id.id
  const [user_recipe_id] = useState(userComment)
  const router = useRouter()
  const { id } = router.query
  const apiRecepi = `https://courageous-lime-jaguar.cyclic.app/recipe/${id}`

  useEffect(() => {
    axios.get(apiRecepi)
      .then((result) => {
        result.data && setData(result.data.data[0])
        console.log(result.data.data[0])
        // alert('get data success');
      })
      .catch((err) => {
        console.log(err)
        alert('get data fail');
      })
  }, [])


  const postComment = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('comment', comment)
    formData.append('user_recipe_id', user_recipe_id)
    formData.append('recipe_id', data.id)

    axios.post(`https://courageous-lime-jaguar.cyclic.app/comment`, formData, {
      'Content-Type': 'multipart/form-data',
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        console.log(res, 'input data success')
        alert('input data success');
        getCommentAll()
        setComment('')
      })
      .catch((err) => {
        console.log(err.message, 'input data fail')
        alert('input data fail');
      })
  }


  const getCommentAll = () => {
    axios.get(`https://courageous-lime-jaguar.cyclic.app/comment/${id}`, {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => {
        result.data && setGetComment(result.data.data)
        console.log('ini data comment', result.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  useEffect(() => {
    getCommentAll()
  }, [])


  const saveRecipe = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('recipe_id', data.id)
    formData.append('user_recipe_id', userData.id)
    console.log(formData)
    const res = axios.post(`https://courageous-lime-jaguar.cyclic.app/savedRecipe`, formData, {
      'Content-Type': 'multipart/form-data',
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        console.log(res, 'saved data success')
        alert('saved data success');
      })
      .catch((err) => {
        console.log(err.message, 'saved data fail')
        alert('saved data fail');
      })
  }


  const likerecipe = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('recipe_id', data.id)
    formData.append('user_recipe_id', userData.id)
    console.log(formData)
    const res = axios.post(`https://courageous-lime-jaguar.cyclic.app/likeRecipe`, formData, {
      'Content-Type': 'multipart/form-data',
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        console.log(res, 'like data success')
        alert('like data success');
        // router.push('/profile')
      })
      .catch((err) => {
        console.log(err.message, 'saved data fail')
        alert('like data fail');
      })
  }



  return (
    <div>
      <div>
        <Navbar />
        <div className='container'>
          <><div className='text-center'>
            <h1
              className='mb-4'
              style={{ color: '#2E266F' }}>
              Loream Sandwich
              {data ? data.title : 'data not found'}
            </h1>
            <img
              src={data ? data.photo : 'data not found'}
              alt=''
              style={{
                width: '600px',
                height: '450px'
              }}
              className='img-fluid'
            />
          </div>
            <div className='d-flex justify-content-center mt-2'>
              <button
                onClick={saveRecipe}
                className='btn btn-white border-warning me-2'>
                <img
                  src='/spg.png'
                  alt=''
                  style={{ width: '30px', height: '30px' }} />
              </button>
              <button
                onClick={likerecipe}
                className='btn btn-white border-warning'>
                <img
                  src='/like.png'
                  alt=''
                  style={{ width: '30px', height: '30px' }} />
              </button>
            </div>
            <div className='col-11 offset-1 mt-5'>
              <h4>Ingredients </h4><ul>
                <li>{data ? data.ingredients : 'data not found'}</li>
                <li>2 tbsp mayonnaise</li>
                <li>3 slices bread</li>
                <li>a little butter</li>
                <li>⅓ carton of cress</li>
                <li>2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese</li>
                <li>crisps , to serve</li>
              </ul>
              <Link
                href={`/vidio/${data.id}`}>
                <h4 className='mt-5'>Vidio Step</h4>
                <img
                  src='/vd.png'
                  alt=''
                  style={{ width: '20%' }}
                  className='mb-3' />
                <br />
                <img
                  src='/vd.png'
                  alt=''
                  style={{ width: '20%' }}
                  className='mb-3' />
                <br />
                <img
                  src='/vd.png'
                  alt=''
                  style={{ width: '20%' }}
                  className='mb-3' />
              </Link>
              <div className='col-12 text-center'>
                <textarea
                  className="form-control mb-3 border-white"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  placeholder='Comment :'
                  style={{ backgroundColor: '#F6F5F4' }}
                  name='comment'
                  value={comment}
                  onChange={((e) => { setComment(e.target.value) })} />
                <button
                  className='btn btn-warning text-white col-3'
                  onClick={postComment}>
                  Post
                </button>
              </div>
            </div></>
          <div className='container col-12 offset-1'>
            <div style={{ marginBottom: '20%', marginTop: '5%' }}>
              <h4 className='mb-5'>Comment</h4>
              {getcomment.map((p, i) => (
                <><div className='d-flex mb-5' style={{ lineHeight: '20%' }}>
                  <img
                    src={p.user_recipe_photo}
                    alt=''
                    className='mb-3'
                    style={{
                      width: '50px',
                      borderRadius: '50%'
                    }} />
                  <div className='mr-5' style={{ marginLeft: '2%' }}>
                    <p className='mx-2 mt-2'>{p.user_recipe}</p>
                    <p className='mx-2 mt-1'>{p.comment}</p>
                  </div>
                </div> </>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}


