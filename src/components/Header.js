import React from 'react';
import Logo from './Logo';
import { headerLogo, header } from './Header.css';
const Header = () => {
	return (
		<header className={header}>
			<Logo className={headerLogo} />
		</header>
	);
};

export default Header;
