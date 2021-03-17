import React from "react";
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";

// Internal Components:
import Navbar from "../navbar/navbar";
import BlogGrid from "../homepage/homepage";
import BlogPost from "../blog_components/blog_post";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
    
        <Navbar />

        <Switch>
          <Route path="/" exact component={BlogGrid} />
          <Route path="/post/:slug" exact component={BlogPost} />
        </Switch>
    
    </div>
    </BrowserRouter>
  );
}

export default  App;
