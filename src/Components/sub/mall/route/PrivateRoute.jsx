import ProductDetail from '../ProductDetail';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Redux 관련 추가

const PrivateRoute = () => {
	const authenticate = useSelector(state => state.authenticate); // Redux store에서 authenticate 상태 가져오기

	return authenticate === true ? <ProductDetail /> : <Navigate to='/mall_project/login' />;
};

export default PrivateRoute;
