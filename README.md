# MongoLearning
Simple nodejs - MongoDb project

REST methods in app.js:-

const getAllUsers = async (req,res) => {
    const {User} = require('./models/user');
    const user = await User.find();
    res.send(user);
};
Get all documents [path: '/users']

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
Gets a single document matched by the name parameter [path: '/users/:name']

const createUser = async (req,res) => {
    const {User} = require('./models/user');
    const user = await User.create(req.body);
    res.send(user);
};
Posts a new document [path: '/users']

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
Posts updated profileImage and status from request body, to a document matched by name supplied as request parameter [path: '/users/:name']

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
Deletes a document matched by the name in request parameter [path: '/users/:name']
