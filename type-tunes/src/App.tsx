import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Album,
  Favorites,
  Login,
  NotFound,
  Profile,
  ProfileEdit,
  Search
} from './pages';


class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/profile/edit" element={ <ProfileEdit /> } />
        <Route path="/album/:id" element={<Album />} />
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
