import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ProductoReducer from '../reducer/ProductoReducer'
import UserReducer from '../reducer/UserReducer'
import ItemsReducer from '../reducer/ItemsReducer'
import RecetasReducer from '../reducer/RecetasReducer'
import thunk from 'redux-thunk'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    ProductoReducer: ProductoReducer,
    UserReducer: UserReducer,
    ItemsReducer: ItemsReducer,
    RecetasReducer: RecetasReducer
})

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;