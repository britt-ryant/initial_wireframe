import React from 'react';

//import redux actions
import {connect, useDispatch, useSelector} from 'react-redux';
//import tast notifications library
import toast from 'react-hot-toast';
//import MUI library components
import { Dialog } from '@mui/material';
//import reducers

//import App Components
import Form from './Form';

const stateToProps = (state) => {
    return state
}


class FormDialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...this.props,
            formType: [
                {name: "Log In", render: true},
                {name: "Sign Up", render: false},
                {name: "Edit Account", render: false},
                {name: "Forgot Password", render: false},
                {name: "Add A Note", render: false},
            ],
            defaultValue: {
                first: this.props.user.userInfo.firstName || "",
                last: this.props.user.userInfo.lastName || "",
                email: this.props.user.userInfo.email || "",
                password: this.props.user.userInfo.password || "",
                confirmPassword: this.props.user.userInfo.password || ""
            },
        }
    };

    componentDidMount(){
        console.log(this.state);
    }

    formType(){
        for(let [key, value] of Object.entries(this.state.formType)){
            console.log(key, value);
            if(value.render){
                return value.name
            }
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(`form submitted`);
        
    }

    render(){
        return(
            <Dialog
                open={!this.state.loggedIn}
                // onClose={renderForm}
                aria-labelledby='alert-dialog-text'
                aria-describedby='alert-dialog-description'
                fullWidth>
                    <Form 
                        handleFormSubmit={this.handleFormSubmit}
                        formType={this.formType()}
                        defaultValue={this.state.defaultValue}
                        />
                </Dialog>
        )
    }

    }


export default connect(stateToProps)(FormDialog);

