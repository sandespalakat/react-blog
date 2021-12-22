import React from "react";
import { connect } from "react-redux"; 
import BlogListItem from "./BlogListItem";
import {  Link } from "react-router-dom";

// Blog list component
const BlogList = (props) => {
    return (
			<div className="col-md-6">
				<div id="postlist">
					{props.blogs.map((blog) => {
						return <BlogListItem key={blog.id} {...blog} />;
					})}
				</div>
			</div>
		);
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
    }
}

export default connect(mapStateToProps)(BlogList);