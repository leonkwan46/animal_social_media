const express = require('express')
const router = express.Router()

const User = require('../db/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')