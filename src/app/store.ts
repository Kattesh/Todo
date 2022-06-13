import {
    addTaskAC,
    removeTaskAC, setTasksAC,
    TasksActions,
    tasksReducer,
    updateTaskAC
} from '../features/TodolistsList/tasks-reducer';
import {
    addTodolistAC, changeTodolistEntityStatusAC, changeTodolistFilterAC, changeTodolistTitleAC, clearTodosData,
    removeTodolistAC, setTodolistsAC,
    TodolistsActions,
    todolistsReducer
} from '../features/TodolistsList/todolists-reducer';
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {AppActions, appReducer, setAppErrorAC, setAppInitializedAC, setAppStatusAC} from './app-reducer'
import {AuthActions, authReducer, setIsLoggedInAC} from "../features/login/auth-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppDispatch = typeof store.dispatch
// export type AppDispatch = ThunkDispatch<RootState, unknown, StoreActions>
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
type StoreActions = TodolistsActions | TasksActions | AuthActions | AppActions


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
