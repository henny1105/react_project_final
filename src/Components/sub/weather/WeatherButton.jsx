import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {
	// setCity props 추가
	return (
		<div className='button_box'>
			{cities.map((item, index) => (
				<Button key={index} variant='info' onClick={() => setCity(item)}>
					{' '}
					{item}
				</Button>
			))}
		</div>
	);
};

export default WeatherButton;
