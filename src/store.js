import {createStore,applyMiddleware,combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { chmodCalculator } from './reducers/Chmod';
const rootReducer=combineReducers({
    chmodCalculator,
});

const intialstate={}

const middleware=[thunk];

const store=createStore(
            rootReducer,
            intialstate,
            composeWithDevTools(applyMiddleware(...middleware))
                    );
export default store;