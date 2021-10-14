import SideNav from './features/navbar/SideNav.js';
import Dashboard from './features/dashboard/Dashboard.js'
import './App.css';

function App() {
  return (
    <div className='page-container'>
      <SideNav/>
      <Dashboard/> 
    </div>
  );
}

export default App;
