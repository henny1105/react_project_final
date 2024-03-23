import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
	return (
		<div>
			<div className='button_box'>
				<Button variant='info'>Current Location</Button> <Button variant='info'>Tokyo</Button> <Button variant='info'>Beijing</Button>
				<Button variant='info'>Newyork</Button>
			</div>
		</div>
	);
};

export default WeatherButton;
