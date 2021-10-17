const db = require("../db");
class Transaction{
    constructor(inputUTXOs, outputUTXOs) {
        this.inputs = inputUTXOs;
        this.outputs = outputUTXOs;
        this.fee = 0;
    }

    execute() {
        console.log('transaction execution started ');
        this.inputs.forEach((input) => {
          input.spent = true;
        });
        this.outputs.forEach((output) => {
          db.utxos.push(output);
        });
      }
}

module.exports = Transaction;