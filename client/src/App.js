import React,{useEffect,createContext} from 'react';
import NavBar from './components/Navbar';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/screens/Home';
import Signin from './components/screens/Signin';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';


const UserContext=createContext()

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/signin'element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/create' element={<CreatePost />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
