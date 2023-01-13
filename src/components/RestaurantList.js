import React from 'react';
import { restaurantList } from './Restaurant.css';
import RestaurantCard from './RestaurantCard';
const RestaurantList = ({ restaurantData }) => {
	return (
		<div className={restaurantList}>
			{restaurantData.map(({ data }) => {
				return (
					<RestaurantCard
						{...data}
						key={data.id}
					/>
				);
			})}
		</div>
	);
};

export default RestaurantList;
