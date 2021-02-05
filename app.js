const express = require('express');
const bodyparser = require('body-parser');

const getAllUsers = async (req,res) => {
    const {User} = require('./models/user');
    const user = await User.find();
    res.send(user);
};
const getUser = async (req,res) => {
    const {User} = require('./models/user');
    const {name: userName} = req.params;
    const user = await User.find(
        {
            "name": { $regex: userName, $options: "i" }
        }
    );
    res.send(user);
};
const createUser = async (req,res) => {
    const {User} = require('./models/user');
    const user = await User.create(req.body);
    res.send(user);
};
const updateUser = async (req,res) => {
    const {User} = require('./models/user');
    const {name: userName} = req.params;
    const {status: userStatus} = req.body;
    const {profileImage: userImage} = req.body;
    let setObj = {};
    if(userStatus){
        setObj.status = userStatus;
    }
    if(userImage){
        setObj.profileImage = userImage;
    }
    const user = await User.updateOne(
        {"name": userName},
        {
            $set: setObj
        }
    );
    res.send(user);
};
const deleteInactiveUsers = async (req,res) => {
    const {User} = require('./models/user');
    const {name: userName} = req.params;
    const user = await User.deleteMany(
        {
            "name": userName, "status": "false"
        }
    );
    res.send(user);
};

async function startServer() {
    const app = express();
    app.use(bodyparser.json());
    app.listen(3000, error => {
        if(error) {
            console.log("error: ", error);
            process.exit(1);
        }
        console.log("server listening on port: 3000");
    });
    app.get('/users', getAllUsers);
    app.get('/users/:name', getUser);
    app.post('/users', createUser);
    app.post('/users/:name', updateUser);
    app.delete('/users/:name', deleteInactiveUsers);
};

startServer();