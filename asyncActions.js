const { createStore } = require("redux")

const initialState = {
    loading: false,
    users = [],
    error: ''
}

// Async actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error = {
 return {
    type: FETCH_USERS_FAILURE,
    payload: error
 }
}

// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ... state, // Make a copy of the state
                loading: true
            }
         case FETCH_USERS_SUCCESS: 
            return {
                loading: false, 
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

    }
}

// Store
const store = createStore(reducer);
