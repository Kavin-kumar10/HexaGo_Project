import {configureStore,getDefaultMiddleware,combineReducers} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import UserSlice from './UserSlice';
import ProductSlice from './ProductSlice'
import Adminslice from './Adminslice';


const middleware = [...getDefaultMiddleware(),logger];

const reducer = combineReducers({
    Products:ProductSlice,
    Users:UserSlice,
    Admin:Adminslice
})



const store = configureStore({
    reducer:reducer,
    middleware
})

export default store;