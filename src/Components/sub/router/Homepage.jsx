import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div>
			<h1>HomePage</h1>
			<Link to='/router_project/about'>about 페이지로 이동하기</Link>
		</div>
	);
};

export default HomePage;
