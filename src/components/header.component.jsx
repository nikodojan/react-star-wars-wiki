import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.css';
import empire from '../assets/images/empire.svg';
import rebels from '../assets/images/rebels.png';

const Header = () => {

  const getLogoImage = ()=>{
    let die = Math.floor(Math.random() * 10);
    return die % 2 === 0 ? empire : rebels;
  }

  return (
    <div className='container-fluid'>
    <nav className="navbar navbar-expand-sm navbar-light bg-light p-1">
      <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className='container'>
              <div className='d-flex flez-row justify-content-between align-items-center'>
                <Link to='/' className='h1 text-dark' style={{textDecoration: 'none', fontWeight: '700'}}>Star Wars Wiki</Link>
                <img src={getLogoImage()} style={{height: '80px', width: '80px'}}/>
                
              </div>
              <div className="navbar-nav p-0 justify-content-center">
                <Link to='/' className='nav-link link-button'>Start</Link>
                <Link to='/movies' className='nav-link link-button'>Movies</Link>
                <Link to='/people' className='nav-link link-button'>People</Link>
                <Link to='/vehicles' className='nav-link link-button'>Vehicles</Link>
                <Link to='/starships' className='nav-link link-button'>Starships</Link>
                <Link to='/planets' className='nav-link link-button'>Planets</Link>
                <Link to='/species' className='nav-link link-button'>Species</Link>
              </div>
            </div> 
          </div>
      </div>
    </nav>
    </div>
  )
};

export default Header;