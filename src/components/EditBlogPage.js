import React from "react";
import { connect } from "react-redux";
import { editBlog, removeBlog } from "../actions/blogs";
import BlogForm from "./BlogForm";
import NotFoundPage from "./NotFoundPage";

// Page for editing a blog
const EditBlogPage = (props) => {
	if (!props.blog) {
		return <NotFoundPage />;
	}
	return (
		<div>
			<div className="float-left mb-10 pb-10">
				<button
					className="btn btn-dark"
					onClick={() => {
						const id = props.match.params.id;
						props.dispatch(removeBlog({ id }));
						props.history.push("/");
					}}
				>
					Remove
				</button>
			</div>
			<div className="mt-10">
				<BlogForm
					blog={props.blog}
					onSubmit={(blog) => {
						props.dispatch(editBlog(props.match.params.id, blog));
						props.history.push("/");
					}}
				/>
			</div>
		</div>
	);
};

const mapValue = (state, props) => {
	return {
		blog: state.blogs.find((blog) => {
			return blog.id === props.match.params.id;
		}),
	};
};
export default connect(mapValue)(EditBlogPage);
