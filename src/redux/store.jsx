import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from '../Components/sub/mall/redux/reducers/authenticateReducer';
import productSlice from '../Components/sub/mall/redux/reducers/productSlice';
import phoneReducer from '../Components/sub/phonebook/redux/reducer/reducer';
import reducer from './reducer/reducer';

const store = configureStore({
	reducer: {
		auth: authenticateReducer,
		product: productSlice,
        basic: reducer,
        phonebook: phoneReducer,
	},
});

export default store;
