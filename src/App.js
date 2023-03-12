import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Videos from './Components/Videos';
import Upload from './Components/Upload';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';

function App() {
  return (
    <Router basename="/geeky-gamer">
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/videos' element= {<Videos/>} />
        <Route path='/upload' element= {<Upload/>} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/signup' element= {<Signup/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
