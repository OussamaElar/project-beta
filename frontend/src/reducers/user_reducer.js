import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";


const UserReducer = (state = { allUsers: {}, user: {}}, action) => {
      let newState = Object.assign({}, state)
      switch (action.type) {
            case RECEIVE_USERS:
                  newState.allUsers = { ...action.users.data }
                  return newState
            case RECEIVE_USER:
                  newState.user = action.user.data
                  return newState;
            default:
                  return state;
      }
}

export default UserReducer;