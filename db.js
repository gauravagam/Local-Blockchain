const Blockchain = require("./models/Blockchain");

const db = {
    mempool: [],
    blockchain: new Blockchain()
}

module.exports = db;