import React from 'react';

const ProductCard = ({ item }) => {
	return (
		<div>
			<div className='img_box'>
				<div className='img_wrap'>
					<img src={item?.img} alt='product_image' />
				</div>
			</div>
			<div>{item?.choice === true ? 'Concious Choice' : ''}</div>
			<div>{item?.title}</div>
			<div>₩{item?.price}</div>
			<div>{item?.new === true ? '신제품' : ''}</div>
		</div>
	);
};

export default ProductCard;
