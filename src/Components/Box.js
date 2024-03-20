import React from 'react';

const Box = (props) => {
	return (
		<div className='box'>
			<h1>{props.title}</h1>
			{props.item && <img className='item-img' src={props.item.img} alt={props.item.name} />}
			<h2>{props.result}</h2>
		</div>
	);
};

export default Box;
