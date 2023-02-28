import styles from '../styles/Import.module.css'
import Navbar from '../componen/Navbar'
import Footer from '../componen/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function Home() {
  const [get, setGet] = useState([])
  const [search, setSearch] = useState('')
  const apiRecepi = `https://courageous-lime-jaguar.cyclic.app/recipe`

  useEffect(() => {
    axios.get(apiRecepi)
      .then((result) => {
        result.data && setGet(result.data.data)
        // alert('get data success');
      })
      .catch((err) => {
        console.log(err)
        alert('get data fail');
      })
  }, [])

  //search/filter
  const filterRecipe = get.filter(recipe => {
    return recipe.title.toLowerCase().includes(search.toLowerCase())
  })

  //sort by id
  const sortByIdAsc = filterRecipe.sort((a, b) => a.id - b.id)
  const sortByIdDesc = filterRecipe.sort((a, b) => b.id - a.id)



  return (
    <div className={styles.container_fluid}>
      <Navbar />
      <div className='container px-lg-5 bg-white'>
        <input
          type="name"
          className='form-control mt-3'
          id="search"
          placeholder='Search Recipe'
          style={{ height: 'auto' }}
          value={search}
          onChange={e => setSearch(e.target.value)}>
        </input>
        <div className='container-fluid mt-5 mb-5 '>
          {sortByIdDesc.map((p, i) => {
            return (
              <div className='col-lg-12 mt-5 d-lg-flex justify-content-between' key={p.id}>
                <img
                  src={p.photo}
                  alt=''
                  style={{
                    width: '200px',
                    height: '200px'
                  }}
                />
                <h4 className='my-5'>
                  {p.title}
                </h4>
                <p className='my-5'>
                  {p.description} 
                </p>
                <Link href={`/recipe/${p.id}`}>
                  <button className='btn btn-warning text-white my-5 py-3'>
                    Learn More
                  </button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
