/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Import.module.css'
import Navbar from '../componen/Navbar'
import Footer from '../componen/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'



export default function HomeLogin() {
  const [get, setGet] = useState([])
  const [search, setSearch] = useState('')
  const [page,setPage] =  useState(1)
  let [limit,setLimit] =  useState(6)
  const apiRecepi = `http://localhost:4001/recipe?page=${page}&limit=${limit}`
  
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
  }, [page])

  const next = () => {
    setPage(page + 1)
  }

  const prev = () => {
    if(page === 0) {
      setPage(page==1)
    } else{
       setPage(page - 1)
    }
  }

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
      <div className='row '>
        <div className='col-9'>
        {/* <Navbar /> */}
          <div className='container px-5'>
            <div className='d-flex justify-content-between'>
              <div className='col-5' style={{ paddingTop: '20%', paddingBottom: '20%' }}>
                <h2 className={styles.fo}>Discover Recipe & Delicious Food</h2>
                <div className='d-flex'>
                    <input type="name" className='form-control' id="search" placeholder='Search Recipe' 
                      style={{ height: 'auto' }} value={search} onChange={e => setSearch(e.target.value)}>
                  </input>
                  <Link href='/search'><button className='btn btn-white'>view</button></Link>
                </div>
              </div>
              <div className='col-7'>
                <img src='/g2.png' alt='' style={{ width: '30%', marginLeft: '30%', zIndex: 3, 
                    position: 'absolute' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='col-3 '>
          <img src='/k1.png' alt='' style={{ width: '100%', zIndex: 2, position: 'relative' }} />
        </div>
      </div>
      <div className='container d-flex'>
        <img src='/k2.png' alt='' />
        <h3 style={{ paddingTop: '5%', paddingBottom: '5%' }}>Popular For You !</h3>
      </div>
      <div className='container-fluid mt-5 mb-5'>
        <div className='row'>
          {sortByIdDesc.map((p, i) => {
            if (i < 2 ) {
              return (
                <div className='col-4 mt-5' key={p.id}>
                  <Link href={`/recipe/${p.id}`}>
                    <img src={p.photo} alt='' style={{ width: '100%', height:'100%' }} />
                    {/* width: '400px' ,height: '400px' */}
                  </Link>
                </div>
              )
            }
          })}
        </div>
      </div>
      <div className='container mt-5 mb-5 d-flex'>
        <img src='/k2.png' alt='' />
        <h3 style={{ paddingTop: '5%', paddingBottom: '5%' }}>New Recipe</h3>
      </div>
      <div className='container-fluid ' style={{ marginBottom: '15%'}}>
          {filterRecipe.map((p, i) => {
            if (i < 1) {
              return (
                <div  className='row d-flex justify-content-between' key={p.id}>
                  <div className='col-4 '>
                    <img src={p.photo} alt='' style={{ width: '25%', zIndex: 3, position: 'absolute', 
                        marginLeft: '3%', marginTop: '3%' }} />
                    <img src='/k3.png' alt='' style={{ width: '50%',  zIndex: 2, position: 'relative' }} />
                  </div>
                  <div className='col-4' style={{ padding:'5%' }}>
                    <h4>Healthy Bone Broth Ramen (Quick & Easy)</h4>
                    <hr />
                    <p>{p.description}</p>
                    <Link href={`/recipe/${p.id}`}><button className='btn btn-warning text-white'>Learn More</button>
                    </Link>
                  </div>
                </div>
              )
            }
          })}
      </div>
      <div className='container d-flex mb-5 mt-5'>
        <img src='/k2.png' alt='' />
        <h3 style={{ paddingTop: '5%', paddingBottom: '5%' }}>Popular Recepi</h3>
      </div>
      <div className='container mb-5'>
        <div className='row'>
          {sortByIdDesc.map((p, i) => {
            if (i < 6) {
              return (
                <div className='col-4 mt-5' key={p.id}>
                  <Link href={`/recipe/${p.id}`}>
                    <img src={p.photo} alt='' style={{ width: '100%' }} />
                  </Link>
                </div>
              )
            }
          })}
        </div>
        <div className='col-12 offset-5 mt-5 text-center'>
          <ul className="pagination">
            <button className="page-item border-white" onClick={prev}>Back</button>
            <li className="page-item"><a className="page-link" href="#">{page}</a></li>
            <button className="page-item border-white" onClick={next}>Next</button>
          </ul>
        </div>
      </div >
      <Footer />
    </div>
  )
}
