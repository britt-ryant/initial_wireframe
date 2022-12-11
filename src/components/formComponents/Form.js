import React from 'react';

//import MUI Lib components
import {
        Box,
        Stack,
        TextField,
        Typography,
        Button
} from '@mui/material';

//import other form components

//import react-router-dom
import {Link} from 'react-router-dom';
import { REGISTER } from 'redux-persist';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        const userInfo = this.props.userInfo;
        this.state = {
            formData: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                passwordConfirm: "",
                note: ""
            },
            fieldError: {
                first: [false, "First Name"],
                last: [false, "Last Name"],
                email: [false, "Email"],
                note: [false, "Note"],
                password: [false, "Password"],
                confirmPassword: [false, "Confirm Password"]
            },
            loaded: false
        };
        this.form = React.createRef();
        this.renderTitle = this.renderTitle.bind(this);
        this.setFormData = this.setFormData.bind(this);
    };

    componentDidMount(){
        console.log('Mounting Form Component');
        console.log(this.state);
        
        
    };

    setFormData(event){
        const {name, value} = event.target;
        console.log(name, );
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value.trim()
            }
        }))

    }

    renderTitle(){
        for(let [key, value] of Object.entries(this.state.formType)){
            console.log(key, value);
            if(value.render){
                return value.name
            }
        }
    }

    render(){
        console.log(this.state.formData);
        let formType = this.props.formType;
        let error = this.state.fieldError;
        return(
            <Box
                ref={this.form}
                onSubmit={this.props.handleFormSubmit}
                component="form"
                noValidate
                autoComplete='on'
            >
                <Stack spacing={2} direction="column" sx={{p:5}}>
                    <Typography 
                            variant="h5">{formType}</Typography>
                    {formType === "Sign Up" || formType === "Edit Account" ? 
                        [<TextField
                            key={1}
                            error={error.firstName[0]}
                            label="First Name"
                            name="firstName"
                            value={this.state.formData.firstName}
                            onChange={this.setFormData}
                            required/>,
                        <TextField
                            key={2}
                            error={error.lastName[0]}
                            label="Last Name"
                            name="lastName"
                            value={this.state.formData.lastName}
                            onChange={this.setFormData}
                            required/>
                        ]:null}
                        <TextField  
                            defaultValue={this.props.defaultValue.email}
                            key={3}
                            error={error.email[0]} 
                            id="outlined-basic 3" 
                            label="email" 
                            variant="outlined" 
                            type="email" 
                            name='email' 
                            onChange={this.setFormData}
                            pattern="\S+"
                            required/>
                    {formType === "Add A Note" ? 
                            <TextField  
                            key={4}
                            error={error.note[0]} 
                            id="outlined-multiline-flexible" 
                            label="Note" 
                            name='note' 
                            multiline 
                            maxRows={4} 
                            onChange={this.setFormData}
                            pattern="\S+"
                            required/> : null} 
                    {formType === "Log In" || formType === "Sign Up" || formType === "Edit Account" ? 
                        <TextField
                            key={5}
                            error={error.password[0]} 
                            defaultValue={this.props.defaultValue.password}  
                            id="outlined-basic 4" 
                            label="Password" 
                            variant="outlined" 
                            type="password" 
                            name='password' 
                            // value={formData.email} 
                            onChange={this.setFormData}
                            pattern="\S+"
                            required/> : null 
                    }
                      {formType === "Sign Up" || formType === "Edit Account" ? 
                        <TextField
                            defaultValue={this.props.defaultValue.password}
                            error={error.confirmPassword[0]} 
                            id="outlined-basic 5" 
                            label="Confirm Password" 
                            variant="outlined" 
                            type="password" 
                            name='confirmPassword' 
                            // value={formData.email} 
                            onChange={this.setFormData}
                            pattern="\S+"
                            required/> : null}       
                    <Button variant='contained' type='submit'>Submit</Button>
                </Stack>
            </Box>
        )
    }
}