import { configureStore, combineReducers } from "@reduxjs/toolkit";

//import reducer components
import userReducer from './userSlice';
import noteReducer from './noteSlice';
import classReducer from './classSlice';
import assignmentReducer from './assignmentSlice';

//import redux persist
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    user: userReducer,
    note: noteReducer,
    class: classReducer,
    assignment: assignmentReducer
});

const persistConfig = {
    key: 'root',
    storage,
    version: 1
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
});
