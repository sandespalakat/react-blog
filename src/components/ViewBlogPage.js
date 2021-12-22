import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

// For viewing the complete blog post
const ViewBlogPage = (props) => {
	if (!props.blog) {
		return <NotFoundPage/>
	}
	return (
		<div>
			<h1>{props.blog.title}</h1>
			<p>
				By: {props.blog.author} on{" "}
				{moment(props.blog.createdAt).format("DD MMM YYYY")}
			</p>
			<p>{props.blog.content}</p>
			<Link to={`/edit/${props.blog.id}`}>Edit</Link>
		</div>
	);
};

const mapValue = (state, props) => {

    return {
			blog: state.blogs.find((blog) => {
				return blog.slug === props.match.params.id;
			}),
		};
}
export default connect(mapValue)(ViewBlogPage);
