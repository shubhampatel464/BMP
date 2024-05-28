const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const security = require('../../models/static/security/security');


const login = async (req, res) => {
    try {
        const mobile = Number(req.body.mobile);
        const password = req.body.password;

        const user = await security.findOne({ mobile: mobile });
        if (!user) {
            return res.status(404).send("User not found");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send("Invalid Password");
        }
        const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
        res.status(200).send({ user,token });
    }
    catch (error) {
        console.log('This error is from ./controller/security/login.js');
        console.log(error);
        res.status(500).send();
    }
}

module.exports = login;
