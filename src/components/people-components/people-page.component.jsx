import React from "react";
import { connect } from 'react-redux';
import { fetchPeople } from '../../actions/peopleActions';
import { Link } from 'react-router-dom';

import Loader from '../loader.component';
import RandomPersons from './random-persons.component'

class PeoplePage extends React.Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  renderList() {
    return this.props.people.map(person=> {
      let id = person.url.split('people')[1].replace('/', '');
      return (
        <li className="list-item list-inline-item" key={id}>
          <Link to={`/people/${id}`} >{person.name} |</Link>
        </li>
      )
    })
  }

  render() {
    if (this.props.people.length === 0) {
      return (
        
        <div className="text-center mt-5 h-25">
          <Loader/>
        </div>
      )
    } 
    return (
      <div className="mt-3">
        <h5>Characters from Star Wars universe</h5>
        <RandomPersons/>
        <div className="container mt-3">
          <div className="h6">Full list:</div>
          <ul className="list-unstyled list-inline text-center">
            | {this.renderList()}
          </ul>
        </div>

      </div>
    )
    

  }

}
//.sort((a, b)=>a.name < b.name ? -1 : 1)
const mapStateToProps = (state) => {
  return { people: state.people }
}

export default connect(mapStateToProps, {fetchPeople})(PeoplePage)