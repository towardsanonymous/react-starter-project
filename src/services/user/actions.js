import {
	LOGIN_USER,
	
} from "./actionTypes";

import {
	LOGIN_USER_WITH_OTP_URL,
} from "../../configs";


import axios from "axios";


export const loginWithOtp = (phone, otp, name) => (dispatch) => {
	axios.post(LOGIN_USER_WITH_OTP_URL, {
		phone: phone,
		otp: otp,
		name: name,
	})
		.then((response) => {
			const user = response.data;
			return dispatch({ type: LOGIN_USER, payload: user });
		})
		.catch(function(error) {
			console.error(error);
		});
};

