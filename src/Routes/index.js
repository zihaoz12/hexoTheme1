import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Main from '../Main/index';
import About from '../Main/About/index';
import Login from '../Main/Login/index';
import Profile from '../Main/Profile/index';
import Post from '../Main/Components/Post';
import NewPost from '../Main/Components/NewPost';

const Routes =()=>{
    return(
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route  path="/about" component={About}/>
            <Route  path="/login" component={Login}/>
            <Route  path="/profile" component={Profile}/>
            <Route  path="/posts/:id" component={Post}/>
            <Route  path="/newpost"  component={NewPost}/>
        </Switch>
    )
}

export default Routes;