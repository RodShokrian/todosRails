import { RECEIVE_ERRORS, CLEAR_ERRORS }
  from '../actions/error_actions';

const errorReducer = (oldState = [], action) => {
  console.log(action.errors);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default errorReducer;
