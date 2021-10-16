const EC = require('elliptic').ec;

const ec = new EC('secp256k1');

for(let i=0;i<2;i++){
    const key = ec.genKeyPair();

    console.log({
      privateKey: key.getPrivate().toString(16),
      publicKey: key.getPublic().encode('hex'),
    });
}