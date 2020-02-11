const mongoose = require ("mongoose");
const keys = require("./keys");
mongoose.connect(
  keys.mongoURI,
    { 
      useNewUrlParser: true
    }
  );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB database")
});

module.exports = db;