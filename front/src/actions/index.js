import axios from 'axios';

export function getAllInfos() {
	return function (dispatch) {
		axios.get('/sql/all')
			.then(function (response) {
				console.log('response all : ', response)
				dispatch({type: 'GET_ALL', payload:response.data});
			})
	}
}

export function getSort(array) {
		let jsonArray = JSON.stringify(array)
		return function (dispatch) {
			axios.get(`/sql/sort/${jsonArray}`)
				.then(function (response) {
					dispatch({type: 'GET_SORT_TIME', payload: response.data});
				})
		}
}

export function getDetails(detail) {
	return {
		type: 'GET_DETAILS',
		payload: detail,
	}
}

