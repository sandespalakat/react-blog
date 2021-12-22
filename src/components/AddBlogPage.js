import React from "react";
import { connect } from "react-redux";
import { addBlog } from "../actions/blogs";
import BlogForm from "./BlogForm";

/**
 * Adding a new blog using BlogForm
 * @param {*} props 
 * @returns 
 */
const AddBlogPage = (props) => (
	<div>
		<BlogForm
			onSubmit={(blog) => {
				props.dispatch(addBlog(blog));
				props.history.push("/");
			}}
		/>
	</div>
);

// binding state to AddBlogPage
const mapState = (state) => {
	return {
		blogs: state.blogs
	}
}

export default connect(mapState)(AddBlogPage);
