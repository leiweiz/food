import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import reduxThunk from 'redux-thunk';
import { reducer as formReduer } from 'redux-form';
import authReduer from './reducers/auth_reducer';

const rootReducer = combineReducers({
    auth: authReduer,
    form: formReduer
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
