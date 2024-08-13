import {
	LOGIN_USER,
	
} from "./actionTypes";

const initialState = {
	user: [],
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_USER:
			return { ...state, user: action.payload };
		default:
			return state;
	}
}
