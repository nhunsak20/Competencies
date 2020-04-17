import axios from "axios"

const { get, post } = axios

const initialState = {
    user: {},
    isLoading: false,
    isError: false,
    message: ''
}

const CHECK_USER = "CHECK_USER",
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    REGISTER = "REGISTER"


export function check() {
    return {
        type: CHECK_USER,
        payload: get('/auth/check')
    }
}

export function login(user, pass) {
    return {
        type: LOGIN,
        payload: post('/auth/login', { user, pass })
    }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: post('/auth/logout')
    }
}

export function register(user, pass) {
    return {
        type: REGISTER,
        payload: post('/auth/register', { user, pass })
    }
}

export default function userReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case CHECK_USER + "_PENDING": return { ...state, isLoading: true, isError: false, message: ''}
        case CHECK_USER + "_FULFILLED": return { ...state, user: payload.data, isLoading: false }
        case CHECK_USER + "_REJECTED": return { ...state, isLoading: false, isError: true, message: payload.response.data }
        case LOGIN + "_PENDING": return { ...state, isLoading: true, isError: false, message: ''}
        case LOGIN + "_FULFILLED": return { ...state, user: payload.data, isLoading: false }
        case LOGIN + "_REJECTED": return { ...state, isLoading: false, isError: true, message: payload.response.data }
        case LOGOUT + "_PENDING": return { ...state, isLoading: true, isError: false,message: ''}
        case LOGOUT + "_FULFILLED": return { ...state, user: payload.data, isLoading: false }
        case LOGOUT + "_REJECTED": return { ...state, isLoading: false, isError: true, message: payload.response.data }
        case REGISTER + "_PENDING": return { ...state, isLoading: true, isError: false,message: ''}
        case REGISTER + "_FULFILLED": return { ...state, user: payload.data, isLoading: false }
        case REGISTER + "_REJECTED": return { ...state, isLoading: false, isError: true, message: payload.response.data }

        default: return state
    }
}