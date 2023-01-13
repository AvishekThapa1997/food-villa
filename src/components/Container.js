import React from 'react';
import { container } from './Container.css';
const Container = ({ children }) => {
	return <div className={container}>{children}</div>;
};

export default Container;
