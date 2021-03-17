import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
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
        
        // Converting the timestamp to a human readable format:
        response.data.createdOn = new Date(response.data.createdOn).toDateString();

        // Adding data to the useState:
        setData({post:response.data});
    };
    
    return (
        <div key={data.post._id} className="post-container">
            <u><h1 className="post-title">{data.post.title}</h1></u>
            <p className="post-date">Uploaded on: {data.post.createdOn}</p>
            <div className="post-content">
                <ReactMarkdown>
                    {data.post.markdown}
                </ReactMarkdown>
            </div>
        </div>);
};

export default BlogPost;