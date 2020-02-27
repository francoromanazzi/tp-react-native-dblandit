import { apiUrl } from '../../config.json'

import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { AsyncStorage } from 'react-native'

import setAuthToken from '../../utils/setAuthToken'


export const loginUser = userData => dispatch => {
    axios
        .post(apiUrl + '/api/v1/auth/login', userData)
        .then(async res => {
            console.log(res);

            const { token } = res.data.message;

            await AsyncStorage.setItem('@jwtToken', token)
            
            // Set token to Auth header
            setAuthToken(`Bearer ${token}`);

            // Decode token to get user data
            const decoded = jwt_decode(token);

            dispatch(setCurrentUser(decoded));
            dispatch({
                type: 'CLEAR_ERRORS_LOGIN'
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: 'GET_ERRORS_LOGIN',
                payload: { 
                    error: typeof(err.response.data.message) === 'string' ?
                            {
                                message: [{
                                    param: err.response.data.message.includes('Password') ? 'password' : 'username',
                                    msg: err.response.data.message
                                }]
                            }
                            : err.response.data                   
                }
            });
        });
}

export const setCurrentUser = decoded => {
    return {
      type: 'SET_CURRENT_USER',
      payload: decoded
    };
};

export const logoutUser = () => async dispatch => {
    await AsyncStorage.removeItem('@jwtToken')
    dispatch(setCurrentUser({}));
}