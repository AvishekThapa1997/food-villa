function searchRestaurant(restaurants, params) {
	return restaurants.filter(({ data: { name } }) => {
		return name.toLowerCase().includes(params.toLowerCase());
	});
}

export { searchRestaurant };
