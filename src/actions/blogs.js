import { v4 as uuidv4 } from "uuid";
import moment from "moment";

// add a blog
export const addBlog = ({
	title = "",
	author = "",
	content = 0,
	slug = 0,
} = {}) => {
	
	return ({
		type: "ADD_BLOG",
		blog: {
			id: uuidv4(),
			title,
			author,
			content,
			createdAt: moment(),
			slug,
		},
	});
 } 

// remove a blog by id
export const removeBlog = ({ id } = {}) => {
	return {
		type: "REMOVE_BLOG",
		id,
	};
};

// edit a blog by id
export const editBlog = (id, update) => {
	return {
		type: "EDIT_BLOG",
		id,
		update,
	};
};
