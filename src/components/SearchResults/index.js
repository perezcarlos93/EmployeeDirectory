import React from 'react';
import './style.css';

function SearchResults(props) {
	// console.log('SearchResults: ' + props);
	// console.log('SearchResults Stringified: ' + JSON.stringify(props));
	return (
		<ul className="list-group search-results">
			<li key={props.result} className="list-group-item">
				{props.results + props.last} | {props.email} | {props.phone}
			</li>
		</ul>
	);
}

export default SearchResults;
