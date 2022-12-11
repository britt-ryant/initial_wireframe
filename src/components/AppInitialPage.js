import React from 'react';
//import redux components
import {connect, useDispatch} from 'react-redux';
//import MUI Lib components
import {
    Box
} from '@mui/material';
//import app components
import SideBar from './SideBar';
import FormDialog from './formComponents/FormDialog';

const stateToProps = (state) => {
    return state;
}

class AppInitialPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: this.props.user.loggedIn
        }
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <Box>
                {this.state.loggedIn ? <SideBar /> :  <FormDialog /> }
            </Box>
        )
    }
}

export default connect(stateToProps)(AppInitialPage);