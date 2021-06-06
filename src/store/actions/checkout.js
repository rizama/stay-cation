import { CHECKOUT_BOOKING } from '../types';
import axios from 'configs/axios';


export const checkoutBooking = (payload) => (dispatch) => {
    dispatch({
        type: CHECKOUT_BOOKING,
        payload: payload,
    });
};

export const submitBooking = (payload) => (dispatch) => {
    return axios.post(
        `/booking`,
        payload,
        {
            headers: {
                contentType: 'multipart/form-data',
            },
        }
    );
};
