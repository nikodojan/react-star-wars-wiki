import Header from './components/header.component';
import { Switch, Route } from 'react-router-dom';

import MainPage from './components/main-page.component';
import PeoplePage from './components/people-components/people-page.component';
import Person from './components/people-components/person.component';
import UnderConstruction from './components/under-consrtuction.component';


function App() {
  return (
    <div className='container'>
      <Header/>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/people' component={PeoplePage}/>
          <Route path='/people/:id' component={Person}/>
          <Route path='/vehicles' component={UnderConstruction}/>
          <Route path='/starships' component={UnderConstruction}/>
          <Route path='/planets' component={UnderConstruction}/>
          <Route path='/species' component={UnderConstruction}/>
          <Route path='/movies' component={UnderConstruction}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
