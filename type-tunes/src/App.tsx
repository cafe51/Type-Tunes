import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/profile/edit" element={ <ProfileEdit /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/favorites" element={ <Favorites /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/" element={ <Login /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    );
  }
}

export default App;
