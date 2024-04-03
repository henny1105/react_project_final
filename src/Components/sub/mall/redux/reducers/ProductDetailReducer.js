let initialState = {
  productList: [],
  selectedItem: null,
  loading: false, 
};

function ProductDetailReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
      case "GET_PRODUCT_SUCCESS":
          return { ...state, productList: payload.data };
      case "GET_SINGLE_PRODUCT_SUCCESS":
          return { ...state, selectedItem: payload.data, loading: false }; 
      default:
          return { ...state };
  }
}

export default ProductDetailReducer;
