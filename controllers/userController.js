const user = require('../models/user');
const { v4: uuidv4 } = require('uuid');
function GetAllUsers(req, res) {
    user.find({}, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.send(err);
        }
    });
}

function GetUserById(req, res) {
    user.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.send(err);
        }
    });
}



function AddUser(req, res) {
    let newuser = new user({
        
        userId: uuidv4(),
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword,
        userDob: req.body.userDob,
        userPhone: req.body.userPhone,
        
    });
    newuser.save((err) => {
        if (!err) {
            res.status(201).send({ message: 'User Details Added Successfully' });
        } else {
            throw err;
        }
    });
}

function UpdateUser(req, res) {
    user.findById(req.params.id, (err, docs) => {
        if (!err) {
            if (docs == null) {
                res.status(404).send({ message: `User with specified id: ${req.params.id} does not exists` });
            } else {
                user.updateOne({ _id: req.params.id }, {
                    userName: req.body.userName,
                    userEmail: req.body.userEmail,
                    userPassword: req.body.userPassword,
                    userDob: req.body.userDob,
                    userPhone: req.body.userPhone,
                }, (err, docs) => {
                    if (!err) {
                        res.status(200).send({ message: 'User details Updated Successfully' });
                    } else {
                        throw err;
                    }
                });
            }
        } else {
            res.send(err);
        }
    });
}

function DeleteUserById(req, res) {
    user.deleteOne({ _id: req.params.id }, (err, docs) => {
        if (!err) {
            res.status(200).send({ message: 'User details Deleted Successfully' });
        } else {
            throw err;
        }
    });
}

module.exports = { GetAllUsers, GetUserById, AddUser, UpdateUser, DeleteUserById }