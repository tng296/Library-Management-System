const jwt = require('jsonwebtoken');


const CreateToken = (payload) => {
    let key = 'cenlib';
    let token = null;
    try {
        token = jwt.sign(payload, key);
        console.log(">>>token in create: ", token)
    } catch (err) {
        console.log(err);
    }
    return token;
}
const VerifyToken = (token) => {
    console.log(">>>check token in verify: ", token);
    let key = 'cenlib';
    let data = null;
    jwt.verify(token, key, function (err, decoded) {
        if (err) {
            console.log(err);
        }
        data = decoded;
    });
    return data;
}


module.exports = { CreateToken, VerifyToken };