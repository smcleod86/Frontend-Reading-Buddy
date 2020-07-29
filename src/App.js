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

import UserExperience from './components/UserExperience';
import FindFriends from './components/FindFriends';

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
          <Route exact path='/readerexperiences/edit'>
            <UserExperience 
              bookInfo={{title: "The Fellowship of the Ring", author: "JRR Tolkien", genre: "nonfiction", summary: "a teenager goes on a walk barefoot"}} 
              userExperienceInfo={{rating: "3", review: "That was a dreadful idea", date_started: "2020-04-02", date_finished: "2020-04-20"}}
            />
          </Route>
          <Route exact path='/profile/friends'>
            <Profile />
            <ProfileFriends />
          </Route>
          <Route exact path='/profile/reviews'>
            <Profile />
            <ProfileReviews />
          </Route>
          <Route exact path='/profile/haveread'>
            <Profile />
            <ProfileHaveRead />
          </Route>
          <Route exact path='/profile/wishlist'>
            <Profile />
            <ProfileWishlist/>
          </Route>
          <Route exact path='/profile/currentlyreading'>
            <Profile />
            <ProfileCurrentlyReading />
          </Route>
          <Route exact path='/profile/wishlist'>
            <Profile />
            <ProfileWishlist/>
          </Route>
          <Route exact path='/users'>
            <FindFriends />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
