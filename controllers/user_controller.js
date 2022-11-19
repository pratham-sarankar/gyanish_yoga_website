const User = require("../models/user");
const TokenController = require("./token_controller");
const EncryptionController = require('./encryption_controller')

async function createUser(req) {
    const username = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phone;
    let password = req.body.password;

    //Encrypt the password.
    password = EncryptionController.encryptPassword(password);

    //Created(Built and Saved) the user in the database.
    const user = await User.create({
        username:username,
        email:email,
        phoneNumber:phoneNumber,
        password:password,
    })

    //Generating new token for the user.
    const token = TokenController.generateNewToken(user);

    //Deleted password from user. We don't want to send password to the front-end.
    delete user.password;

    return {status:"success",user:user,token:token};
}

module.exports = {createUser}