# Local-Blockchain
In this repo I have created blockchain api.
__Run npm start__ to start node server. When server will start it will create 2 pair of publickey, private key and UTXO for each.

__Api endpoints are as follows -__
1. __/startMining__ - Request object = `{method:"put",content-type:"application/json"}`

2. __/transaction__ - Request object = ```{method: "post", content-type:"application/json", body: JSON.stringify({
    "txo":{
        "owner": "04599f1b3000720b3f41e8d566575c17f61a79680a2ce1dd56fd9847f9bf08720e0493cb4088be7308ab0242434f21811e88e2550d1ce444ef454a9c3d0c0cca16",
        "amount": 20
    }
})}```

3. __/stopMining__ - Request object = `{method:"put",content-type:"application/json"}`

4. __/getBalance/address__ - here value of address should be public key.