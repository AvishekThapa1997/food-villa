import React from 'react';
import { IMG_CDN_URL } from '../config/constants';
import {
	restaurantCard,
	restaurantImgBox,
	restaurantDetails,
	restaurantName,
	restaurantCuisines,
	restaurantDistance
} from './Restaurant.css';
const RestaurantCard = ({
	name,
	cuisines,
	lastMileTravelString,
	cloudinaryImageId
}) => {
	return (
		<div className={restaurantCard}>
			<div className={restaurantImgBox}>
				<img src={IMG_CDN_URL + cloudinaryImageId} />
			</div>
			<div className={restaurantDetails}>
				<p className={restaurantName}>{name.toLowerCase()}</p>
				<p className={restaurantCuisines}>{cuisines.join(', ')}</p>
				<p className={restaurantDistance}>{lastMileTravelString}</p>
			</div>
		</div>
	);
};

export default RestaurantCard;
