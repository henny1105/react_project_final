import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
	const navigate = useNavigate();
	const showDetail = () => {
		navigate(`/mall_project/product/${item.id}`);
	};

	const formatPrice = (price) => {
		return price.toLocaleString(); // 천단위 콤마를 붙임
	};

	return (
		<div className='card'>
			<div className='img_box' onClick={showDetail}>
				<div className='img_wrap'>
					<img src={process.env.PUBLIC_URL + item?.img} alt='product_image' /> 
				</div>
			</div>
			<div className='choice_cont'>{item?.choice === true ? 'Concious Choice' : ''}</div>
			<div className='product_name'>{item?.title}</div>
			<div className='price'>₩{formatPrice(item?.price)}</div>
			<div className='new_product'>{item?.new === true ? '신제품' : ''}</div>
		</div>
	);
};

export default ProductCard;