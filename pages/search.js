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
    <div className='container-fluid'>
      <Navbar />
      <div className='container bg-white'>
        <input
          type='text'
          className='form-control mt-5 col-2 shadow-sm py-2'
          id='search'
          placeholder='Search Recipe'
          style={{ height: 'auto' }}
          value={search}
          onChange={e => setSearch(e.target.value)}/>
        <div className='container-fluid mb-4 '>
          <div className='row justify-content-center'>
            {sortByIdDesc.map((p, i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className='card col-lg-3 my-5 text-center  border mx-2 py-3 shadow-sm ' 
                    style={{ 
                      height: '395px', 
                      width: '260px', 
                      borderRadius: '30px' }}
                >
                  <img 
                    src={p.photo} 
                    className='card-img-top' 
                    alt='recipe' 
                    style={{ 
                      height: '200px', 
                      width: '230px', 
                      borderRadius: '15px' }} />
                  <div className='card-body'>
                    <h4 className='text-secondary bg'>
                      {p.title}
                    </h4><hr />
                    <p className=''>
                      {p.description}
                    </p>
                    <Link href={`/recipe/${p.id}`}>
                      <button className='btn btn-warning text-white'>
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
