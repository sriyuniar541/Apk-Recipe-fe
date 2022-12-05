import React from 'react'

export default function Form(props) {
  return (
    <div className='col-lg-6 offset-lg-3 mt-2'>
       <label for="exampleFormControlInput1" className="form-label" style={{color:'#8692A6'}}>{props.label}</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={props.placeholder}/>
    </div>
  )
}
