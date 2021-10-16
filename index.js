const express = require("express");
const app = express();
const { PORT } = require('./config');

const db = require('./db');
const TXO = require('./models/TXO');
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
    
});

const addTransaction= (txo)=>{
    const txoObj = new TXO(txo.owner, txo.amount);
    db.mempool.push(txoObj);
    console.log('transaction added in mempool ',db.mempool.length);
}

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
