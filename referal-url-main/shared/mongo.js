const { MongoClient } = require("mongodb");
const URL =
  "mongodb+srv://joyce:admin%40123@cluster0.fqwyn.mongodb.net/ReferalLink?retryWrites=true&w=majority";

// const URL = process.env.URL;
// const DB_NAME = process.env.DB_NAME;
const client = new MongoClient(URL);

const mongodb = {
  db: null,
  users: null,

  async connect() {
    await client.connect();
    this.db = client.db("ReferalLink");
    this.users = this.db.collection("users");
  },
};

module.exports = mongodb;
