import SideNav from './features/navbar/SideNav.js';
import Dashboard from './features/dashboard/Dashboard.js';
import JobSearch from './features/jobSearch/JobSearch.js';
import {Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='page-container'>
      <SideNav/>
      <Switch>
        <Route path='/job-search'>
          <JobSearch/>
        </Route>
        <Route exact path='/'>
          <Dashboard/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
