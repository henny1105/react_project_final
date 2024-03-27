import React from 'react';
import './Homepage.css';
import AboutPage from './AboutPage';
import HomePage from './Homepage';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
	return (
		<div>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path='about' element={<AboutPage />} />
			</Routes>
		</div>
	);
};

export default Main;
