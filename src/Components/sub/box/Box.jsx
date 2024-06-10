import React from 'react';

const Box = (props) => {
	return (
		<div className='box'>
			<h1>{props.title}</h1>
			<img className='item-img' src={props.item && props.item.img} alt='결과값' />
			<h2>WIN</h2>
		</div>
	);
};

export default Box;

// null은 flase를 return함
