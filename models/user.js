const {mongoose, connection} = require('./index.js');
const {Schema} = mongoose;

const userSchema = new Schema(
    {
        name: {type: String, required: true, default: null},
        profileImage: {type: String, required: false, default: null},
        status: {type: String, required: true, default: false}
    }
);

const User = connection.model('User', userSchema);
User.createCollection();

module.exports = {
    User
};