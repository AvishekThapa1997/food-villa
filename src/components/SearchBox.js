import React from 'react';
import { searchBox, searchInput } from './SearchBox.css';
const SearchBox = ({ filterRestaurant }) => {
	const inputChangeHandler = (event) => {
		const value = event.target.value;
		filterRestaurant(value);
	};
	return (
		<div className={searchBox}>
			<input
				type='text'
				className={searchInput}
				placeholder='search restaurant'
				onChange={inputChangeHandler}
			/>
		</div>
	);
};

export default SearchBox;
