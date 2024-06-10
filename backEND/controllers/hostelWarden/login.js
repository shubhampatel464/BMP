const hostelWardenSchema = require('../../models/static/hostelWarden/hostelWarden');
const bcrypt = require('bcryptjs');



const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        console.log(email, password);
        const user = await hostelWardenSchema.findOne({ email });

        if (!user) {
            return res.status(400).send({ error: 'Invalid login credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send({ error: 'Invalid login credentials' });
        }

        res.status(200).send({ user });

    } catch (error) {
        console.log("This is an error from ./controllers/hostelWarden/login.js")
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

module.exports = login;