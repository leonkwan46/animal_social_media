import * as yup from 'yup';

//const username = yup.string('Enter your username').required('Required')
//const password = yup.string('Enter your Password').min(8, 'Minimum 8 characters').required('Required')


const loginValidation = yup.object().shape({
    username: yup.string()
    .required("Username is required."),
    password: yup.string()
    .min(8,"Too Short!")
    .required("Password is required")
    
})

  export {loginValidation};