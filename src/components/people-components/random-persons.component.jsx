import React from "react";
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { getPersonId } from "../../helpers/idHelpers";
import './random-persons.component.css';

const RandomPersons = (props) => {

  function getRandomPeople() {
    let numbers = [];
    for (let i = 1; i <= 3; i++ ){
      let random = Math.floor(Math.random() * props.people.length)
      if (!numbers.find(n=>n===random)){
        numbers.push(random)
      }
    }
    return [props.people[numbers[0]],props.people[numbers[1]],props.people[numbers[2]]]
  }
  
  if (props.people.length === 0) {
    return <div> No People</div>
  }
  return (
    
    <div className="row justify-content-center border p-1 text-center bg-light">
      <div className="h5 lead">Do you know these characters? Check them out...</div>
        {
          getRandomPeople().map(person=>{
            return (                 
              <div className="m-1 p-1 border d-flex flex-column justify-items-center text-center" 
              key={person.name} 
              style={{width: '15rem'}}>
                <Link to={`/people/${getPersonId(person.url)}`} className='link-text'>
                  <div className="h6">{person.name}</div>
                  <img src={person.image} 
                    style={{maxHeight: '200px', maxWidth: '100%', objectFit: 'contain'}} alt={`Image of ${person.name}`}/>
                </Link>
              </div>
                 
            )
          })
        }
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return { people: state.people }
}

export default connect(mapStateToProps)(RandomPersons);