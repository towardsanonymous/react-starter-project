import {
	SET_COUNT,
	
} from "./actionTypes";




export const setCounter = (count) => (dispatch) => {
	
	return dispatch({ type: SET_COUNT, payload: count });
	
};

