const { Schema, model } = require("mongoose");

const serviecSchema = new Schema({
    service: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: String, require: true },
    provider: { type: String, require: true },
});

const Service = new model("Service", serviecSchema);

module.exports = Service;
