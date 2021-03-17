import React from "react";
import { Link } from "react-router-dom";

// Importing Styling:
import "./blog_thumbnail.css";

class BlogThumbnail extends React.Component {
    render() {

        // Converting the date object to human readable format:
        const humanDate = new Date(this.props.date).toDateString();

        return (
            <div className="thumbnail">

                <Link to={`/post/${this.props.slug}`} style={{textDecoration: 'none'}}>
                <h1 className="title">{this.props.title}</h1>
                </Link>

                <p className="thumbnail-date">Uploaded On: {humanDate}</p>
                <p className="thumbnail-category">Category: {this.props.category}</p>

                <p className="thumbnail-description">{this.props.description}</p>

            </div>
            
        )
    };
};

export default BlogThumbnail;