const express = require("express");
const app = express();
const { PORT } = require('./config');

const db = require('./db');
const UTXO = require('./models/TXO');
require('./generate');
const {mine, startMining, stopMining} = require('./mine');

app.use(express.json());
app.put("/startMining",async(req,res)=>{
    startMining();
    res.json({message: "mining started"});
})

app.put("/stopMining",async(req,res)=>{
    stopMining();
    res.json({message: "mining stopped"});
})
app.post("/transaction",async(req,res)=>{
    const { txo } = req.body;
    addTransaction(txo);
    res.json({message: "transaction added ot memory pool"});
});

app.get("/getBalance/:address",async(req,res)=>{
    const { address } = req.params;
    let balance = getBalance(address);
    res.json({message:`balance of ${address} is ${balance}`});
});

const addTransaction= (txo)=>{
    const txoObj = new UTXO(txo.owner, txo.amount);
    db.mempool.push(txoObj);
    console.log('transaction added in mempool ',db.mempool.length);
}

const getBalance = (address) =>{
    const ourUTXOs = db.utxos.filter(x => {
        return x.owner === address && !x.spent;
      });
    const sum = ourUTXOs.reduce((p,c) => p + c.amount, 0);
    return sum;
}
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
