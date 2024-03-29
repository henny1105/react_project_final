import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
	const [productList, setProductList] = useState([]);
	const [query] = useSearchParams();
	const getProducts = async () => {
		let searchQuery = query.get('q') || '';
		let url = `https://my-json-server.typicode.com/henny1105/react_project_final/products/?q=${searchQuery}`;
		let response = await fetch(url);
		let data = await response.json();
		setProductList(data);
	};

	useEffect(() => {
		getProducts();
	}, [query]);

	return (
		<div>
			<Container className='mall_project'>
				<Row>
					{productList.map((product) => (
						<Col lg={2} key={product.id}>
							<ProductCard item={product} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductAll;
