const Blockchain = require("./models/Blockchain");

const db = {
    mempool: [],
    blockchain: new Blockchain(),
    utxos: []
}

module.exports = db;