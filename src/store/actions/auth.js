import * as action from './actionTypes';

export const authStart = () =>{
    return{
        type:action.AUTH_START
    }
}

export const authSuccess = (authData) =>{
    return{
        type:action.AUTH_SUCCESS,
        authData:authData
    }
}

export const authFail = (error) =>{
    return{
        type:action.AUTH_FAIL,
        error:error
    }
}

export const auth = (email,password) => {
    return dispatch =>{
        dispatch(authStart())
    }
}


