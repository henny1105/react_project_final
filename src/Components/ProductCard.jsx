import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
	const navigate = useNavigate();
	const showDetail = () => {
		navigate(`/mall_project/product/${item.id}`);
	};
	return (
		<div className='card' onClick={showDetail}>
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
