import React from 'react';
//import MUI Library Components
import {
    Box,
    Button
    
} from '@mui/material';
//import redux materials
import { useDispatch } from 'react-redux';
import { PURGE } from 'redux-persist';



const AppLandingPage = (props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("Clicked!");
        dispatch({
            type: PURGE,
            ket: 'root',
            result: () => null
        })
    }

    return(
        <Box 
            sx={{height: '50%', width: '50%', border: 2}}
        > 
        <Button onClick={handleClick}>Purge State</Button>
        </Box>
    )

}


export default AppLandingPage;