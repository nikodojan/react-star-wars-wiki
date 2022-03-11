import React from 'react'
import { connect } from 'react-redux'
import { getShip } from '../../actions/starshipsActions';
import { getPerson } from '../../actions/peopleActions';
import { fetchMovies } from '../../actions/moviesActions';
import PersonsMovies from './persons-movie-list.component';

import PersonInfo from './person-info.component';

class Person extends React.Component {
  componentDidMount = () => { 
    console.log('did mount')
    this.props.getPerson(this.props.match.params.id)
    this.props.fetchMovies();
  }

  getMovieList = () => {
    let movieList = this.props.movies.filter(m=>this.props.person.films.includes(m.url))
    return movieList;
  }

  render() {
    if (!this.props.person){
      console.log(this.props.person)
      return (
        <div>loading...</div>
      )
    }
    else {
      return (       
        <div className='row mt-4'>
          <div className='col'>
            <h3>{this.props.person.name}</h3>
            <PersonsMovies movieList={this.getMovieList()}/>
          </div>
          <PersonInfo person={this.props.person}/>
        </div>
      )
    }    
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('maptostate')
  console.log(ownProps)
  const idParam = ownProps.match.params.id;

  return { 
    people: state.people,
    person: state.people.find(p => 
            p.url.split('people')[1].replaceAll('/', '') === idParam),
    movies: state.movies
  }
}

export default connect(mapStateToProps, {getShip, getPerson, fetchMovies})(Person);



