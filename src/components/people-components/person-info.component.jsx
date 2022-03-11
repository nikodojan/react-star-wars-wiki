import React from 'react'

const PersonInfo = (props) => {
  return (
    <div className='col-3'>
            <div className='col border'>
              <div className='m-2'>
                <img src={props.person.image} style={{width: '100%', objectFit: 'contain' }} alt={`Picture of ${props.person.name}`}/>
              </div>
              <div className='bg-light h5 text-center p-1'>
                {props.person.name}
              </div>
              <div className='col p-2'>
                <div className='row justify-content-between w-100'>
                  <div className='w-50'>Birth year: </div><div className='w-50'>{props.person.birth_year}</div>
                  <div className='w-50'>Gender: </div><div className='w-50'>{props.person.gender}</div>
                  <div className='w-50'>Height: </div><div className='w-50'>{props.person.height}</div>
                  <div className='w-50'>Hair: </div><div className='w-50'>{props.person.hair_color}</div>
                  <div className='w-50'>Eyes: </div><div className='w-50'>{props.person.eye_color}</div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default PersonInfo;
