import { combineReducers, compose, createStore } from "redux";
import blogReducer from '../reducers/blogs';

export default () => {
const store = createStore(
	combineReducers({
		blogs: blogReducer,
	}),
	
);
    return store;
}

