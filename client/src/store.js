import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import reduxThunk from 'redux-thunk';
import authReduer from './reducers/auth_reducer';

const rootReducer = combineReducers({
    auth: authReduer
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
