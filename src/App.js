import React, { useState } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import SearchBox from './components/SearchBox';
import { restaurantData } from './config/constants';
import useDebounce from './util/debounce';
import { searchRestaurant } from './util/util';

const App = () => {
	const [, setSearchParam] = useState('');
	const [restaurants, setRestaurants] = useState(restaurantData);
	function _filterRestaurant(params) {
		setSearchParam(params);
		const filteredRestaurants = searchRestaurant(restaurantData, params);
		setRestaurants(filteredRestaurants);
	}
	const filterRestaurant = useDebounce(_filterRestaurant, 300);
	return (
		<>
			<Header />
			<main>
				<Container>
					<SearchBox filterRestaurant={filterRestaurant} />
					<RestaurantList restaurantData={restaurants} />
				</Container>
			</main>
		</>
	);
};

export default App;
