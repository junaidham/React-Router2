import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import NavBar from './components/NavBar';
import Page404 from './components/page404';
import User from './components/User';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Channel from './components/Channel';
import Company from './components/Company';
import Other from './components/Other';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/filter' element={<Filter />} />

        <Route path='/user/:name' element={<User />} />

        <Route path='/' element={<Navigate to="/"/>} />
        <Route path='/*' element={<Page404 />} />

        <Route path='/contact/' element={<Contact />} >
        <Route path='channel' element={<Channel />} />
        <Route path='company' element={<Company />} />
        <Route path='other' element={<Other />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
