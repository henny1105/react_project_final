function login(id, password) {
	return (dispatch, getState) => {
		dispatch({ type: 'LOGIN_SUCESS', payload: { id, password } });
	};
}

export const authenticateAction = { login };
