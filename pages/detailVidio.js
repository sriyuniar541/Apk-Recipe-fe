import React from 'react'
import Navbar from '../componen/Navbar'



export default function DetailVidio() {
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
                                {/* <video>
                                    <source src='#' type='vidio/webm' />
                                    browser tidak mendukung video
                                </video> */}
                                <img src='/m2.png' className="img-fluid" alt="..." />
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

                            {/* <!-- Full screen modal --> */}


                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
