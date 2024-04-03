import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { productDetailAction } from './redux/actions/productDetailAction';


const ProductDetail = () => {
	let { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector((state) => state.productDetail.selectedItem); // 상태 경로 수정
	const loading = useSelector((state) => state.productDetail.loading); // 로딩 상태를 관리해야 한다면 초기 상태에 추가

	useEffect(() => {
	  if (id) {
		dispatch(productDetailAction.getProductDetail(id)); // 수정된 부분
	  }
	}, [dispatch, id]);
	if (!product) {
		return (
			<Container className='mall_cont'>
				{loading ? <SyncLoader className='loading_spinner' color='rgba(204, 7, 30, 0.5)' loading={loading} size={10} aria-label='Loading Spinner' data-testid='loader' /> : ''}
			</Container>
		);
	}

	const formatPrice = (price) => {
		return price.toLocaleString();
	};

	return (
		<Container className='product_detail_page'>
			<Row>
				<div className='product_detail'>
					<div className='img_box'>
						<Col>
							<img src={product?.img} alt={product?.title} />
						</Col>
					</div>
					<div className='txt_box'>
						<div className='top_box'>
							{product?.new && <p className='new_product'>신제품</p>}
							{product?.choice && <p className='choice_cont'>Conscious Choice</p>}
						</div>
						<div className='product_title'>{product?.title}</div>
						<div className='price'>₩{formatPrice(product?.price)}</div>
						<Dropdown>
							<Dropdown.Toggle variant='secondary' id='dropdown-basic'>
								Dropdown Button
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{product?.size.map((size, index) => (
									<Dropdown.Item key={index} href={`#/action-${index}`}>
										{size}
									</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>

						<button>추가</button>
					</div>
				</div>
			</Row>
		</Container>
	);
};

export default ProductDetail;
