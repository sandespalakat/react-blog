import React from "react";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
import { parse } from "uuid";
import { checkSlugExists } from "../service/blogs";

/**
 * Form for adding/editing a blog
 */
export default class BlogForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.blog ? props.blog.title : "",
			author: props.blog ? props.blog.author : "",
			content: props.blog ? props.blog.content : "",
			slug: props.blog ? props.blog.slug : "",
			error: [],
		};
	}

	// changing state when title changes
	onChangeTitle = (e) => {
		const title = e.target.value;
		this.setState(() => {
			return {
				title,
			};
		});
	};

	// changing state when author changes
	onChangeAuthor = (e) => {
		const author = e.target.value;
		this.setState(() => {
			return {
				author,
			};
		});
	};

	// changing state when content changes
	onChangeContent = (e) => {
		const content = e.target.value;
		this.setState(() => {
			return {
				content,
			};
		});
	};

	// changing state when slug changes
	onChangeSlug = (e) => {
		const slug = e.target.value;
		this.setState(() => {
			return {
				slug,
			};
		});
	};

	// form submit
	onSubmit = (e) => {
		e.preventDefault();
		if (this.validateForm()) {
			this.setState(() => ({ error: [] }));
			this.props.onSubmit({
				title: this.state.title,
				author: this.state.author,
				content: this.state.content,
				slug: this.state.slug,
			});
		}
	};

	// validate form fields
	validateForm = () => {
		let valid = true;
		let erros = [];
		if (!this.state.title || this.state.title.length > 15) {
			valid = false;
			erros.push("title length should be in between 0 and 15");
		}

		if (!this.state.author) {
			valid = false;
			erros.push("Please enter author name");
		}

		if (!this.state.content) {
			valid = false;
			erros.push("Please provide some content");
		}

		if (!this.state.slug) {
			valid = false;
			erros.push("Please provide a slug for the blog");
		} else {
			if (checkSlugExists(this.state.slug)) {
				valid = false;
				erros.push("Slug URL already exists");
			}
		}

		this.setState((prevState) => {
			return {
				error: erros,
			};
		});

		return valid;
	};

	render() {
		return (
			<div>
				{this.state.error.map((e) => {
					return <p key={e}>{e}</p>;
				})}
				{/* {this.state.error && <p>{this.state.error}</p>} */}
				<div className="conatiner pl-8 pr-8">
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<input
								className="form-control"
								type="text"
								name="title"
								value={this.state.title}
								onChange={this.onChangeTitle}
							/>
						</div>
						<div className="form-group">
							<input
								className="form-control"
								type="text"
								name="author"
								value={this.state.author}
								onChange={this.onChangeAuthor}
							/>
						</div>
						<div className="form-group">
							<textarea
								rows="10"
								className="form-control"
								name="content"
								value={this.state.content}
								onChange={this.onChangeContent}
							></textarea>
						</div>
						<div className="form-group">
							<input
								className="form-control"
								type="text"
								name="slug"
								value={this.state.slug}
								onChange={this.onChangeSlug}
							/>
						</div>

						<button className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}
