import {
	SET_COUNT,

} from "./actionTypes";

const initialState = {
	counter: 0,
};

export default function counterReducer(state = initialState, action) {
	switch (action.type) {
		case SET_COUNT:
			return { ...state, counter: action.payload };
		default:
			return state;
	}
}
