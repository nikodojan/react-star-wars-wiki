import React from "react";
import logo from '../assets/images/swlogo.png'

const MainPage = () => {
  return (
    <div className="container mt-3">
      <div className="col w-100 text-center">
        <img src={logo} width='300px' className="my-3"/>
        
        <p>
          Here arises my mini Star Wars wiki. 
          Most of it is still under construction.
        </p>
        <p>
          Currently available sections: <br></br>
          People
        </p>
        <p>
          Used APIs: <br></br>
          https://swapi.dev/<br></br>
          https://github.com/akabab/starwars-api
        </p>
      </div>

      </div>

  )
}

export default MainPage;