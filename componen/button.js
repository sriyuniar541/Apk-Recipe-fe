import React from 'react'

const button = ({title,type}) => {
  return (
    <div>
      <button className={`btn btn-${type}`}>{title}</button>
    </div>
  )
}

export default button
