class Transaction{
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
        this.fee = 0;
    }
}

module.exports = Transaction;