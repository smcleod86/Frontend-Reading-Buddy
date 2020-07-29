import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

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
import ProfileWishlist from './components/profile_components/ProfileWishlist';


const PrivateRoute = ({ component: Component, ...rest }) => {

  const user = localStorage.getItem(`jwtToken`);
  return <Route {...rest} render={(props) => (
      user
          ? <Component {...rest} {...props} />
          : <Redirect to='/login' />
      )} 
  />
}

function App() {
  let [currentUser, setCurrentUser] = useState("")
  let [isAuthenticated, setIsAuthenticated] = useState(true)

  useEffect(() => {
    let token;
    if(localStorage.getItem('jwtToken') === null) {
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
      setIsAuthenticated(true);
    }
  }, [])

  let nowCurrentUser = (userData) => {
    console.log("oh hey this is even running")
    setCurrentUser(userData);
    setIsAuthenticated(true)
  }

  let handleLogout = () => {
    if(localStorage.getItem('jwtToken') !== null) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  console.log('Current User = ', currentUser);
  console.log('Authenticated = ', isAuthenticated);

  return (
    <div className="App">
      <Router>
        <Navbar  handleLogout={handleLogout} isAuthed={isAuthenticated}/>
        <Switch>
          <Route exact path='/readerexperiences/edit'>
            <UserExperience 
              bookInfo={{title: "The Fellowship of the Ring", author: "JRR Tolkien", genre: "nonfiction", summary: "a teenager goes on a walk barefoot"}} 
              userExperienceInfo={{rating: "3", review: "That was a dreadful idea", date_started: "2020-04-02", date_finished: "2020-04-20"}}
            />
          </Route>
  
          <Route exact path='/users'>
            <FindFriends />
          </Route>

          <Route path='/books' component = {Books} />
          <Route exact path='/book/:id' component = {SearchBookDetails} />
          <Route exact path='/profile' component = {Profile} />
          <Route path='/register' component = {Register} />
          <Route path='/login' render ={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} /> } />
          {/* <PrivateRoute path='/profile' render = {(props) => <Profile {...props} user={currentUser} /> }/> */}

          <Route exact path='/profile/friends'>
            <Profile user={currentUser} />
            <ProfileFriends friends={currentUser.friends} />
          </Route>

          <Route path='/profile/reviews'>
            <Profile user={currentUser} /> 
            <ProfileReviews reviews={currentUser.reviews} />
          </Route>

          <Route path='/profile/haveread'>
            <Profile user={currentUser}/> 
            <ProfileHaveRead read={currentUser.read}/> 
          </Route>

          <Route path='/profile/wishlist'>
            <Profile user={currentUser} />
            <ProfileWishlist wishlist={currentUser.wishlist} />
          </Route>

          <Route path='/' exact component={Home} />

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
