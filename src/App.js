import { Outlet } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
