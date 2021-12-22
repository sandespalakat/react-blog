import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeBlog } from "../actions/blogs";
import moment from "moment";

// Single blog item in the list
const BlogListItem = ({
	dispatch,
	id,
	title,
	author,
	content,
	createdAt,
	slug,
}) => {
	return (
		<div className="container">
			<div className="mt-5">
				<h3>{title}</h3>
				<p>
					{author} -- {moment(createdAt).format("DD MMM YYYY")}
				</p>
				<p>
					{content.length > 300 ? content.substring(0, 300) + "....." : content}{" "}
				</p>
				<Link to={`view/${slug}`}>View</Link>
			</div>
		</div>
	);
};

// const mapValues = (state) => {
//     return {
//         state:
//     }
// }

export default connect()(BlogListItem);
