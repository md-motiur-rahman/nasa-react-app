import React from 'react'

export default function Main({data}) {
  return (
    <div className='imageContainer'>
        <img src={data.hdurl} alt={data.title || "bg-image"} className='bgImage'/>
    </div>
  )
}
