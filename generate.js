const EC = require('elliptic').ec;

const ec = new EC('secp256k1');
const db = require('./db');
const UTXO = require('./models/TXO');

for(let i=0;i<2;i++){
    const key = ec.genKeyPair();
    let publicKey = key.getPublic().encode('hex');
    db.utxos.push(new UTXO(publicKey,10));
    console.log({
      privateKey: key.getPrivate().toString(16),
      publicKey,
    });
}