import React from 'react';
import { searchBox, searchInput } from './SearchBox.css';
const SearchBox = () => {
	return (
		<div className={searchBox}>
			<input
				type='text'
				className={searchInput}
				placeholder='search restaurant'
			/>
		</div>
	);
};

export default SearchBox;
