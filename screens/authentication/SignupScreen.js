import React, { useState } from 'react';
import SignupComponent from '../../components/SignupComponent';
import { ToastAndroid } from 'react-native';

export default function Signup({ navigation, route }) {
    // manage states
    const [form, setForm] = useState({});
    const [validates, setValidates] = useState(false);
    const [error, setError] = useState('')

    const signUpURL = 'https://clads-service.herokuapp.com/api/v1/customer/register';

    const navigateToEmailConfirmation = () => navigation.navigate("EmailConfirmation");

    const signUp = () => {
        console.log(form)
        fetch(signUpURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                password: form.password,
                role: 'CLIENT'
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            if (responseJson.status === 201){
                navigateToEmailConfirmation()
            }
        })
        .catch((error) => {
            setError(error)
        })
        
    }

    const onChange = ({ name, value }) => setForm({...form, [name]: value});

    const handleSubmitButton = () => {
        const emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\."+
        "[a-zA-Z0-9_+&*-]+)*@" +
        "(?:[a-zA-Z0-9-]+\\.)+[a-z" +
        "A-Z]{2,7}$";

        if (form.firstName.trim() != ""){
            setValidates(true)
        } else {
            setValidates(false)
            ToastAndroid.show("Please enter valid first name", ToastAndroid.SHORT);
        }

        if (form.lastName.trim() != ""){
            setValidates(true)
        } else {
            setValidates(false)
            ToastAndroid.show("Please enter valid last name!", ToastAndroid.SHORT);
        }

        if (form.email.match(emailRegex)){
            setValidates(true)
        } else {
            setValidates(false)
            ToastAndroid.show("Please enter valid email!", ToastAndroid.SHORT);
        }

        if (form.password != null && form.password.length >= 6){
            setValidates(true)
        } else {
            setValidates(false)
            ToastAndroid.show("Please must have at least 6 characters", ToastAndroid.SHORT);
        }

        if (form.password === form.confirmPassword){
            setValidates(true)
        } else {
            setValidates(false)
            ToastAndroid.show("Password does not match", ToastAndroid.SHORT);
        }
        if (validates){
            signUp()
        }
    }
    
    const onSubmit = () => {
        handleSubmitButton();
    }

    return (
        <SignupComponent 
        form={form} 
        onSubmit={onSubmit} 
        onChange={onChange} 
        />
    );
}