import {tasksReducer} from '../features/TodolistsList/tasks-reducer';
import {todolistsReducer} from '../features/TodolistsList/todolists-reducer';
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './app-reducer'
import {authReducer} from "../features/login/auth-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
