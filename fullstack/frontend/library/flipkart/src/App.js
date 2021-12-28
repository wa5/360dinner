import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './pages/About';
import Authentication from './pages/Authentication';
import Contactus from './pages/Contactus';
import Home from './pages/Home';
import UsersList from './pages/UsersList';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contactus/>}/>
          <Route path="/users" element={<UsersList/>}/>
          <Route path="/auth" element={<Authentication/>}/>
        </Routes>
      </Router>
  
    </>
    
  )
 
}

export default App;
