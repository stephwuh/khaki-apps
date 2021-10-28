// import SideNav from './features/navbar/SideNav.js';
import Dashboard from './features/dashboard/Dashboard.js';
import JobSearch from './features/jobSearch/JobSearch.js';
import {Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='row mx-auto'>
        <div className='col background'>
        <Dashboard/>
        </div>
      </div>
    </div>
  );
}

export default App;
