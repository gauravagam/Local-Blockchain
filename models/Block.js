const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(transactions) {
        this.timestamp = Date.now();
        this.nonce = 0;
        this.transactions = transactions;
    }

    hash(){
        return SHA256(this.timestamp+""+this.nonce+""+this.transactions).toString();
    }
}

module.exports = Block;