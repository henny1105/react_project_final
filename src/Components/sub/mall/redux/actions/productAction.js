function getProducts(searchQuery) {
	return async (dispatch, getState) => {
		let url = `https://my-json-server.typicode.com/henny1105/react_project_final/products/?q=${searchQuery}`;
		let response = await fetch(url);
		let data = await response.json();

		dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
	};
}

export const productAction = { getProducts };
