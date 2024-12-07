const express = require('express');
const { getUsers, createUser, updateUser, deleteUser, getUserById } = require('./user.controller');
const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.put('/:userId', updateUser);

router.delete('/:userId', deleteUser);

router.get('/:userId', getUserById);


module.exports = router