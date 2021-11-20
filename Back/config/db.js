const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb+srv://HJCarslanASH:HJCarslanASH@cluster0.t0y5o.mongodb.net/TrackingDatabase?retryWrites=true&w=majority");
};

module.exports = connect;