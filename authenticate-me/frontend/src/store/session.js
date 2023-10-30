import { csrfFetch } from "./csrf";

const ADD_USER = 'session/addUser';

const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    };
};

export const loginUser = (user) => async (dispatch) => {
    const options = {
        method: "POST",
        body: JSON.stringify(user)
    }
    const response = await csrfFetch('/api/session', options);

    if (!response.ok) throw response;

    const data = await response.json();
    dispatch(addUser(data.user));
    return data;
};

const initialState = { user: null };

const sessionReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return { user: {...action.user} }
        default:
            return state;
    };
};

export default sessionReducer;
