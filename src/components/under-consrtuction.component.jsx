import React from 'react'

import constr from '../assets/images/construction.png'

export default function UnderConstruction() {
  return (
    <div className='text-center mt-5'>
      <img src={constr} className="w-25"/>
      <h3 className='mt-3'>Under contruction</h3>
    </div>
  )
}
