import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import productReducer from './productReducer';
import ProductDetailReducer from './ProductDetailReducer';

export default combineReducers({
	auth: authenticateReducer,
	product: productReducer,
	productDetail : ProductDetailReducer
});
