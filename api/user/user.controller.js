const { UserModel } = require('./user.model');

const createUser = (req, res, next) => {

    const user = new UserModel({
        firstName: req.body.firstName
    });

    user.save().then(result => {
        res.status(201).json({
            message: "User Created"
        });
    }).catch(err => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });

}

const getUsers = (req, res, next) => {
    UserModel.find().then(reult => {
        res.status(200).json(reult);
    }).catch(err => {
        res.status(404).json({
            message: "Users not found"
        });
    })
}

const updateUser = (req, res, next) => {

}

const deleteUser = (req, res, next) => {

}

const getUserById = (req, res, next) => {

}

module.exports = {
    createUser, getUsers, getUserById, updateUser, deleteUser
}