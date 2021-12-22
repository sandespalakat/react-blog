import React from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
const NotFoundPage = () => (
	<div>
		This URL does not exist. Go <Link to="/">Home</Link>
	</div>
);
export default NotFoundPage;
