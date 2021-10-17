const SHA256 = require('crypto-js/sha256');

class Block{
    constructor() {
        this.timestamp = Date.now();
        this.nonce = 0;
        this.transactions = [];
    }

    addTransactions(transaction){
        this.transactions.push(transaction);
        console.log('block height ',this.transactions.length);
    }
    hash(){
        return SHA256(this.timestamp+""+this.nonce+""+this.transactions).toString();
    }

    execute(){
        this.transactions.forEach(element => {
            element.execute();
        });
    }
}

module.exports = Block;