import React from "react";
import BlogList from "./BlogList";

/**
 * Listing the saved blogs from localstorage
 * @returns 
 */
const BlogDashboardPage = () => (
	<div className="row">
		<div className="col-md-1"></div>
		<BlogList />
	</div>
);

export default BlogDashboardPage;
