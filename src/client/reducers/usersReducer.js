import {FETCH_USERS} from '../actions'

export default (state = {}, action) => {
    if (action.type === FETCH_USERS) {
        return action.payload;
    } else {
        return state;
    }
}
