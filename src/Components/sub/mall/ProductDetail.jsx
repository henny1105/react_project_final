import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
	let { id } = useParams();
	const [product, setProduct] = useState(null);

	const getProductDetail = async () => {
		let url = `http://localhost:5000/products/${id}`;
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('상품을 불러오는 데 실패했습니다.');
			}
			const data = await response.json();
			setProduct(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getProductDetail();
	}, [id]);

	if (!product) {
		return <div>로딩 중...</div>;
	}

	const formatPrice = (price) => {
		return price.toLocaleString(); // 천단위 콤마를 붙임
	};

	return (
		<div className='product_detail'>
			<div className='img_box'>
				<img src={product.img} alt={product.title} />
			</div>
			<div className='txt_box'>
				<div className='product_title'>{product.title}</div>
				<div className='price'>₩{formatPrice(product.price)}</div>
				<div className='size'>{product.size}</div>
				{product.choice && <p className='choice'>Conscious Choice</p>}
				{product.new && <p className='new_product'>신제품</p>}
				<button>추가</button>
			</div>
		</div>
	);
};

export default ProductDetail;
