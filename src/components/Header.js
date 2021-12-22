import React from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";

// Header of the application with navigation link
const Header = () => {
	return (
		<header>
			<h1>React Blog</h1>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/" activeClassName="is-active" exact={true}>
							Articles
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/create" activeClassName="is-active">
							Create Blog
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
