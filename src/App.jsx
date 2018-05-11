import React from 'react';
import Header from './components/Header';
import UserList from './containers/UserList';
import UserDetail from './containers/UserDetail';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <h2>User List</h2>
    <UserList />
    <hr />
    <h2>User Details</h2>
    <UserDetail />
  </div>
);

export default App;