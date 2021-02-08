import React from 'react';
import './style.css';

function SearchResults(props) {
	return (
		<ul className="list-group search-results">
			<li key={props.result} className="list-group-item">
				{props.result + props.result} | {props.email} | {props.phone}
			</li>
		</ul>
	);
}

export default SearchResults;
