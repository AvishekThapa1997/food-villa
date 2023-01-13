import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import SearchBox from './components/SearchBox';
import { restaurantData } from './config/constants';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Container>
					<SearchBox />
					<RestaurantList restaurantData={restaurantData} />
				</Container>
			</main>
		</>
	);
};

export default App;
