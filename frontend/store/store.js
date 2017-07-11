import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { thunkifier } from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer,
                     preloadedState,
                     applyMiddleware(thunkifier)
                    );
};

export default configureStore;
