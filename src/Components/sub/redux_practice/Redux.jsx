import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoxRedux from './BoxRedux';

const Redux = () => {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();

	const increase = () => {
		dispatch({ type: 'INCREMENT' });
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increase}>증가</button>
			<BoxRedux />
		</div>
	);
};

export default Redux;
