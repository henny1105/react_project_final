import React from 'react';
import './Homepage.css';
import AboutPage from './AboutPage';
import HomePage from './Homepage';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage';
import ProductDetailPage from './ProductDetailPage';

const Main = () => {
	return (
		<div>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path='about' element={<AboutPage />} />
				<Route path='products' element={<ProductPage />} />
				<Route path='products/:id' element={<ProductDetailPage />} />
			</Routes>
		</div>
	);
};

export default Main;
