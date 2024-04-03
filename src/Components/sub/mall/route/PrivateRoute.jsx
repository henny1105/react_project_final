import ProductDetail from '../ProductDetail';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const PrivateRoute = () => {
	const authenticate = useSelector(state => state.authenticate); 

	return authenticate === true ? <ProductDetail /> : <Navigate to='/mall_project/login' />;
};

export default PrivateRoute;
