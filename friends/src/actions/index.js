import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';



export const getFriends = () => dispatch => {
    dispatch({type: FETCH_DATA_START });
    axios
        .get('http://localhost:5000/friends')
        .then(res => {
            console.log(res.data);
            dispatch({
                type: FETCH_DATA_SUCCESS, 
                payload: res.data
             })
        })
        .catch (err => {
            dispatch({
                type: FETCH_DATA_FAILURE,
                payload: err
            });
        })
}


export const addFriend = (newFriend) => dispatch => {
    dispatch({type: FETCH_DATA_START });
    axios
        .get('http://localhost:5000/friends', newFriend)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: FETCH_DATA_SUCCESS, 
                payload: res.data
             })
        })
        .catch (err => {
            dispatch({
                type: FETCH_DATA_FAILURE,
                payload: err
            });
        })
}


