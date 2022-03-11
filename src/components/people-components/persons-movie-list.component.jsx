import React from "react";

const PersonsMovies = ({movieList}) => {
  return (
    <div>
      <p className='h6'>Appeares in:</p>
      <ul>
        {
          movieList.map(movie => {
              return (
                <li>
                  {movie.title}
                </li>
              )                    
          })
        }
      </ul>
    </div>
  )
}

export default PersonsMovies;