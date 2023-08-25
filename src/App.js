import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import User from './Pages/User/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element = {<SignIn/>}></Route>
        <Route path='/user' element = {<User/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
