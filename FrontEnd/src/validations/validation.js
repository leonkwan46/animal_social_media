import * as yup from 'yup';

const username = yup.string('Enter your username').required('Required')
const name = yup.string('Enter your username').min(1, 'Cannot be empty').required('Cannot be empty')
const password = yup.string('Enter your Password').min(8, 'Minimum 8 characters').required('Required')
const confirm_password = yup.string('Enter your Confirm Password')
  .required('Required').oneOf([yup.ref("password"), null],
    "Password doesn't match", function (value) {
  return this.password === value;
});

const registerValidation = yup.object().shape({
    username,
    password,
    name,
    confirm_password,
})

const loginValidation = yup.object().shape({
  username,
  password,
})

const updateValidation = yup.object().shape({
  name,
})

export {loginValidation, registerValidation, updateValidation};