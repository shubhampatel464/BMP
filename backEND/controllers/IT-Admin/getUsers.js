const registrar = require('../../models/static/registrar/registrar');
const hostelWarden = require('../../models/static/hostelWarden/hostelWarden');
const staff = require('../../models/static/staff/staff');



const getRegistrar = async (req, res) => {
    try {
        const registrarData = await registrar.find();
        res.status(200).send(registrarData);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


const getHostelWarden = async (req, res) => {
    try {
        const hostelWardenData = await hostelWarden.find();
        res.status(200).send(hostelWardenData);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getStaff = async (req, res) => {
    try {
        const staffData = await staff.find();
        res.status(200).send(staffData);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}



module.exports = {getRegistrar, getHostelWarden, getStaff};