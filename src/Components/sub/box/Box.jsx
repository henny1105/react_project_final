import React from 'react';

const Box = (props) => {
	return (
		<div className='box'>
			<h1>{props.title}</h1>
			<img
				className='item-img'
				src='https://i5.walmartimages.com/seo/PLUS-Fit-Cut-Curve-Sissors-Micro-Serrated-Blade-Green_aa4cbb2c-3501-4293-b363-5194ec5755b4.69fa6b5f5aae30e7e5e97fa2e520f4ae.jpeg'
				alt='가위사진'
			/>
			<h2>WIN</h2>
		</div>
	);
};

export default Box;
