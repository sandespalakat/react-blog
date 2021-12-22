
import React from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import Header from '../components/Header';
import AddExpensePage from "../components/AddBlogPage";
import EditBlogPage from "../components/EditBlogPage";
import BlogDashboardPage from "../components/BlogDashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import AddBlogPage from "../components/AddBlogPage";
import ViewBlogPage from "../components/ViewBlogPage";




const Approuter = () => {
    return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route path="/" component={BlogDashboardPage} exact={true} />
						<Route path="/create" component={AddBlogPage} />
						<Route path="/edit/:id" component={EditBlogPage} />
						<Route path="/view/:id" component={ViewBlogPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</BrowserRouter>
		);
}

export default Approuter;
