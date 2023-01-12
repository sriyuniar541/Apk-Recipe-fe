import React, { useEffect, useState } from 'react'
import Navbar from '../../componen/Navbar'
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router'
import axios from 'axios'



export default function DetailVidio() {
    const [data, setData] = useState([])
    const router = useRouter()
    const {id} = router.query
    const apiRecepi = `http://localhost:4001/recipe/${id}`
 
  useEffect(() => {
    axios.get(apiRecepi)
      .then((result) => {
        result.data && setData(result.data.data[0])
        console.log(result.data.data[0],'ini dari detail vidio')
        // alert('get data success');
      })
      .catch((err) => {
        console.log(err)
        alert('get data fail');
      })
  }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-1'>
                    <img src='/k4.png' alt='' />
                </div>
                <div className='col-11'>
                    <Navbar />
                    <div className='container'>
                        <div className='row '>
                            <div className='col-7'>
                                <ReactPlayer url={data?data.vidio:'data not found'} />
                                <h4 className='mt-3'>Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then mix it</h4>
                                <p>3 Mont ago</p>
                            </div>
                            <div className='col-4 offset-1'>
                                <h5>Next</h5>
                                <img src='/m1.png' className="img-fluid" alt="..." />
                                <h5>Beef Steak with Curry Sauce - [Step 5]Saute condiments together until turn brown</h5>
                                <img src='/m3.png' className="img-fluid" alt="..." />
                                <h5>Beef Steak with Curry Sauce - [Step 6]Saute condiments together until turn brown</h5>
                                <img src='/m1.png' className="img-fluid" alt="..." />
                                <h5>Beef Steak with Curry Sauce - [Step 7]Saute condiments together until turn brown</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
