const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../db/users');

const router = express.Router();

router.post("/", async (req, res, next) => {
    const { username, password } = req.body;
    
})