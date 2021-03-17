// Package Imports: 
import React, { useState, useEffect } from "react";
import axios from 'axios';

// Importing Components:
import BlogThumbnail from "../blog_components/blog_thumbnail";

// Styling Component:
import "./homepage.css";

function BlogGrid() {

    // Defining State reack hook populated on render:
    const [data, setData] = useState({thumbnails: []});

    /**
     * Function that calls the backend API for blog post thumbnail data.
     * The function is called by the state react hook to store blog post
     * data on render.
     * 
     * @function
     */
    function getPosts() {
        axios.get("http://localhost:7070/api/blog/posts")
            .then(res => {setData({thumbnails: res.data})})
            .catch(err => {console.log(err)});
    };

    // Calling getPosts to populate data hook:
    useEffect(() => {getPosts()}, []);

    // Empty array to be populated w/ BlogThumbnail components:
    const blogComponents = [];

    // Iterating over the blog post thumbnail data generating BlogThumbnail
    //components:
    for (var i=0; i < data.thumbnails.length; i++) {
        
        // Data thumbnail elements:
        const post = data.thumbnails[i];

        blogComponents.push(<BlogThumbnail
             title={post.title}
             description={post.description}
             category={post.category}
             date={post.createdOn}
             slug = {post.slug}
             />);
    }


    return (
    <div className="grid_container">

        <div className="grid-mainbody">

        <input className="main-search" type="text" placeholder="  Post Search"></input>

        <div>{blogComponents}</div>
                
        </div>

    </div>
    )
};

export default BlogGrid;