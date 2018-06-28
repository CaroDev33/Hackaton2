const reducerSort = (state = [], action) => {
	switch (action.type) {
		case 'GET_SORT_TIME':
			return action.payload;
		default:
			return state;
	}
};

export default reducerSort;
