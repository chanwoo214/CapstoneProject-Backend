const Client = require("../models/client")

const clientController = {};
clientController.createClient = async (req, res) => {
    try {
        const { clientName, bank, productName, term, rate, refixDate, amount, description } = req.body;
        const client = new Client({ clientName, bank, productName, term, rate, refixDate, amount, description });
        await client.save();
        res.status(200).json({ status: "Success", client });
    } catch (error) {
        res.status(400).json({ status: "Fail", error: error.message })
    }
};
clientController.getClients = async (req, res) => {
    try {
        const clients = await Client.find({});
        res.status(200).json({status:"Success", data: clients});
    } catch (error) {
        res.status(400).json({ status: "Fail", error: error.message });
    }
};

module.exports = clientController;