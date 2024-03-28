import ProductDetail from '../ProductDetail';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticate }) => {
	return authenticate === true ? <ProductDetail /> : <Navigate to='/mall_project/login' />;
};

export default PrivateRoute;
