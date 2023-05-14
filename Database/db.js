const mongoose = require("mongoose");
const url =
  "mongodb://uday:asdfghj@ac-q3rmerr-shard-00-00.6fkhb9a.mongodb.net:27017,ac-q3rmerr-shard-00-01.6fkhb9a.mongodb.net:27017,ac-q3rmerr-shard-00-02.6fkhb9a.mongodb.net:27017/?ssl=true&replicaSet=atlas-bkc04u-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoDB = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.error("Error connecting to the database", error);
    });
};

module.exports = mongoDB;
