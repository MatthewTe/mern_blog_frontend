import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing styling: 
import "./blog_post.css";

function BlogPost({ match }) {

    const [data, setData] = useState({post:[]});

    // Adding data to the state upon rendering of page:
    useEffect(() => {getBlogPost()}, []);

    /**
     * Function makes a request to blog API for a post with the specific URL slug and
     * adds response data to the State.
     * @function
     */
    const getBlogPost = async () => {
        const api_endpoint = `http://localhost:7070/api/blog/post/${match.params.slug}`
        
        // Making axios request:
        const response = await axios.get(api_endpoint);
        const response_data = await response.data[0];

        // Converting the timestamp to a human readable format:
        response_data.createdOn = new Date(response_data.createdOn).toDateString();

        // Adding data to the useState:
        setData({post:response_data});
    };
    
    return (
        <div key={data.post._id} className="post-container">
            <div className="post-content" dangerouslySetInnerHTML={{ __html: data.post.content }}>      
            </div>
        </div>);
};

export default BlogPost;