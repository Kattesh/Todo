import React, {useEffect} from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useDispatch} from 'react-redux'
import {useAppDispatch, useAppSelector} from './store'
import {initializeAppTC} from './app-reducer'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import {Menu} from '@mui/icons-material';
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {Login} from "../features/login/Login";
import {Route, Routes, Navigate, HashRouter} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {logoutTC} from "../features/login/auth-reducer";


function App() {
    const status = useAppSelector((state) => state.app.status)
    const isInitialized = useAppSelector((state) => state.app.isInitialized)
    const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn)
    const dispatch = useAppDispatch()
    const logOut = () => {
        dispatch(logoutTC())
    }
    useEffect(() => {
        dispatch(initializeAppTC())
    }, [isLoggedIn])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2, color: "Turquoise"}}>
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Todolists
                    </Typography>
                    {isLoggedIn && <Button color='inherit' onClick={logOut}> Log out</Button>}
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <HashRouter>
                    <Routes>
                        <Route path='/' element={<TodolistsList/>}/>
                        <Route path='/Todo' element={<TodolistsList/>}/>
                        <Route path='login' element={<Login/>}/>
                        <Route path='/404' element={<h1>404 <h4>Oops..! PAGE NOT FOUND</h4></h1>}/>
                        <Route path='*' element={<Navigate to='/404'/>}/>
                    </Routes>
                </HashRouter>
            </Container>
        </div>
    )
}

export default App
