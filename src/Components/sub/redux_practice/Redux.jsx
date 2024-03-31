import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Redux = () => {
	const [count, setCount] = useState(0);
	const dispatch = useDispatch();

	const increase = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increase}>중가</button>
		</div>
	);
};

export default Redux;
