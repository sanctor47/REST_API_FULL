const mongoose = require("mongoose");

const Device = mongoose.model(
  "User",
  new mongoose.Schema({
    label: String,
    Type: String,
    model: String,
    client_ID: String,
    firmware_ver: String,
    group: String,
    com_params:[
        {
            mqtt: Boolean,
            inTopic: String,
            outTopic: String,
            HTTP: Boolean,
            GET_URI: String,
            POST_URI: String
        }
    ]
  })
);

module.exports = Device;