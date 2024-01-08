import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import SignIn from './Pages/Login/Login';
import Profile from './Pages/User/Profile';
import { useSelector } from 'react-redux';
import Error from './Pages/Error/Error';




function App() {

  return (
    <div className="app">
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element = {<SignIn/>}></Route>
        <Route path='/profile' element = {<Profile/>}></Route>
        <Route path='/*' element = {<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
