import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import memberlist from './pages/memberlist';
import introduce from './pages/Introduce';

const App = () => {
  return(
    <>
      <Route component = {introduce} path = '/' exact/>
      <Route component = {memberlist} path = '/members' exact/>
      <Route component = {PostPage} path = '/updates' exact/>
      <Route component = {LoginPage} path = '/login' exact/>
      <Route component = {RegisterPage} path = '/register' exact/>
      <Route component = {WritePage} path = '/write' exact/> 
    </>
  )
}

export default App;
