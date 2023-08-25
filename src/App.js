import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import SignIn from './Pages/Login/Login';
import User from './Pages/User/Profile';
import { useSelector } from 'react-redux';




function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element = {<SignIn/>}></Route>
        <Route path='/profile' element = {<User/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
