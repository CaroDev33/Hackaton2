import { combineReducers } from 'redux';
import reducerAll from './reducerAll';
import reducerSort from './reducerSort';
import reducerDetailsModals from './reducerDetailsModals'

const rootReducer = combineReducers({
	All:reducerAll,
	Sort:reducerSort,
	Details:reducerDetailsModals
});

export default rootReducer;
