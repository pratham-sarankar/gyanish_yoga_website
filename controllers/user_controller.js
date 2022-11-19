const User = require("../models/user");
const TokenController = require("./token_controller");
const EncryptionController = require('./encryption_controller')

async function register(req) {
    const username = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phone;
    let password = req.body.password;

    try{
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
        return {status:"success",data:{user:user,token:token},message:"User created successfully"};

    } catch (error) {
        let message = error;
        if(error['name']==='SequelizeUniqueConstraintError'){
            message = "User already exist with this mobile number";
        }
        return {status:"error",data:{user:null,token:null},message:message}
    }
}

async function login(req){
    let phoneNumber = req.body.phone;
    let password = req.body.password;
    console.log(phoneNumber);

    try{
        //Find user with the given phone number.
        const user = await User.findByPk(phoneNumber);
        console.log(user);
        if(user==null){
            return {status:"error",data:null,message:"User not found"};
        }

        //Matching password
        const matched = EncryptionController.comparePassword(password,user.password);
        if(!matched){
            return {status:"error",data:null,message:"Incorrect Password"};
        }

        //Generate new token for the user.
        const token = TokenController.generateNewToken(user);
        return {status:"success",data: {user:user,token:token},message:"Login successful"};

    } catch (error) {
        return {status:"error",data:null,message:error}
    }

}

module.exports = {register,login}