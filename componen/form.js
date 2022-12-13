import React from 'react'

export default function InputForm(props) {
  return (
    <div className='col-lg-6 offset-lg-3 mt-2'>
       <label className="form-label" style={{color:'#8692A6'}}>{props.label}</label>
            <input type={props.type} className="form-control" id="FormControl" placeholder={props.placeholder} name={props.name}/>
    </div>
  )
}
