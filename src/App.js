import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import SearchBox from './components/SearchBox';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Container>
					<SearchBox />
				</Container>
			</main>
		</>
	);
};

export default App;
