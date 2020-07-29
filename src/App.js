import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Home from './components/Home';
import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';

import SearchBookDetails from './components/SearchBookDetails';
import ProfileFriends from './components/profile_components/ProfileFriends';
import ProfileReviews from './components/profile_components/ProfileReviews';
import ProfileHaveRead from './components/profile_components/ProfileHaveRead';
import ProfileCurrentlyReading from './components/profile_components/ProfileCurrentlyReading';
import ProfileWishlist from './components/profile_components/ProfileWishlist';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/books'>
            <Books />
          </Route>
          <Route exact path='/book/:id'>
              <SearchBookDetails />
            </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route expact path='/profile/friends'>
            <Profile />
            <ProfileFriends />
          </Route>
          <Route expact path='/profile/reviews'>
            <Profile />
            <ProfileReviews />
          </Route>
          <Route expact path='/profile/haveread'>
            <Profile />
            <ProfileHaveRead />
          </Route>
          <Route expact path='/profile/wishlist'>
            <Profile />
            <ProfileWishlist/>
          </Route>
          <Route expact path='/profile/currentlyreading'>
            <Profile />
            <ProfileCurrentlyReading />
          </Route>
          <Route expact path='/profile/wishlist'>
            <Profile />
            <ProfileWishlist/>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
