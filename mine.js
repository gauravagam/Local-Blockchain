const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
const db = require('./db');
const Block = require("./models/Block");
const Transaction = require('./models/Transaction');
let mining = true;
mine();

function startMining(){
    mining = true;
    mine();
}

function stopMining(){
    mining = false;
}

function mine() {
    if(!mining) return;

    let transactions = db.mempool.length > MAX_TRANSACTIONS 
        ? db.mempool.splice(0, MAX_TRANSACTIONS) : db.mempool.splice(0, db.mempool.length);
    if(transactions.length>0){
        let transaction = new Transaction([],[...transactions]);
        let blockObj = new Block();
        blockObj.addTransactions(transaction);
        
        while(BigInt(`0x${blockObj.hash()}`) > TARGET_DIFFICULTY){
            blockObj.nonce+=1;
        }
        blockObj.execute();
        console.log(`mined block #${db.blockchain.getBlockHeight()}`);
        db.blockchain.addBlock(blockObj);
    }
    setTimeout(() => {
        mine();
    }, 2000);
}

module.exports = {
    mine,
    startMining,
    stopMining
}