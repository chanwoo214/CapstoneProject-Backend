const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = Schema({
    clientName: { type: String, required: true },
    bank: { type: String, required: true },
    productName: { type: String, required: true },
    term: { type: Number, required: true },
    rate: { type: Number, required: true },
    refixDate: { type: String, required: true },
    amount: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
    description: { type: String, required: true },
}, { timestamps: true });

loanSchemaSchema.methods.toJSON = function () {
    const obj = this._doc
    delete obj.__v
    delete obj.updateAt
    delete obj.createAt
    return obj
}

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;