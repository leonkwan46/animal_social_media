import * as yup from 'yup';

const username = yup.string('Enter your username').required('Required')
const name = yup.string('Enter your name').min(1, 'Cannot be empty').required('Required')
const email = yup.string('Enter your email').email('Invalid email').required('Required')
const password = yup.string('Enter your Password').min(8, 'Minimum 8 characters').required('Required')
const confirm_password = yup.string('Enter your Confirm Password')
  .required('Required').oneOf([yup.ref("password"), null],
    "Password doesn't match", function (value) {
  return this.password === value;
});

const registerValidation = yup.object().shape({
    username,
    password,
    email,
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

const resetPasswordValidation = yup.object().shape({
  username,
  password,
  confirm_password
})

export {loginValidation, registerValidation, updateValidation, resetPasswordValidation};