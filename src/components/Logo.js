import React from 'react';

const Logo = ({ className }) => {
	return (
		<a href='/'>
			<img
				src='https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj'
				alt='Foodvilla logo'
				className={className}
			/>
		</a>
	);
};

export default Logo;
