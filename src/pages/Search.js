import React, { Component } from 'react';
import API from '../utils/API';
import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Alert from '../components/Alert';

class Search extends Component {
	state = {
		search: '',
		SearchResult: [],
		results: [],
	};

	// When the component mounts, get a list of all available employees and update state
	componentDidMount() {
		API.getDirectory()
			.then((res) => {
				// console.log('directory: ' + JSON.stringify(res.data));
				this.setState({ results: res.data });
			})
			.catch((err) => console.log(err));
	}

	handleInputChange = (event) => {
		this.setState({ search: event.target.value });
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		function setSearchResults() {
			let directory = this.state.results.results;
			let userSearch = this.state.search;
			const directoryByName = [];

			for (let i = 0; i > directory.length; i++) {
				let fullName = directory[i].name.first + directory[i].name.last;
				if (fullName === userSearch) {
					fullName.push(directoryByName);
				}
			}
			return directoryByName;
		}
		setSearchResults();
		// }
		// 		API.getByName(this.state.search, this.state.results);
		// 		.then((res) => {
		// 			console.log('employee by name: ' + res);
		// 			this.setState({ results: res.data.message });
		// 		})
		// 		.catch((err) => console.log(err));
	};
	render() {
		return (
			<div>
				<Container style={{ minHeight: '80%' }}>
					<h1 className="text-center">Search Here</h1>
					<Alert
						type="danger"
						style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
					>
						{this.state.error}
					</Alert>
					<SearchForm
						handleFormSubmit={this.handleFormSubmit}
						handleInputChange={this.handleInputChange}
						name={this.state.name}
					/>
					<SearchResults results={this.state.results} />
				</Container>
			</div>
		);
	}
}

export default Search;
