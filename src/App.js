// import SideNav from './features/navbar/SideNav.js';
import Dashboard from './features/dashboard/Dashboard.js';
import JobSearch from './features/jobSearch/JobSearch.js';
import {Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='container background'>
      <div className='row w-75 mx-auto'>
        <div className='col'>
        <Dashboard/>
        </div>
      </div>
    </div>
  );
}

export default App;
