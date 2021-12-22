const blogDefaultState = [];

export default (state = blogDefaultState, action) => {
	switch (action.type) {
		case "ADD_BLOG":
			const addBlogs = [...state, action.blog];
			localStorage.setItem("blogs", JSON.stringify(addBlogs));
			return addBlogs;
		
		case "REMOVE_BLOG":
			const removeBlogs =  state.filter((blog) => {
				return blog.id !== action.id;
			});
			localStorage.setItem("blogs", JSON.stringify(removeBlogs));
			return removeBlogs;

		case "EDIT_BLOG":
			const editBlogs =  state.map((blog) => {
				if (blog.id === action.id) {
					return {
						...blog,
						...action.update,
					};
				} else {
					return blog;
				}
			});
			localStorage.setItem("blogs", JSON.stringify(editBlogs));
			return editBlogs;
		default:
			const localBlogs = localStorage.getItem('blogs');
			if (localBlogs) {
				return JSON.parse(localBlogs)
			} else {
				return state;
			}
			
	}
};

