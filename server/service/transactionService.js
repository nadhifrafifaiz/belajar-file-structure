const Service = require("./service");
const { Users, Transactions, TransactionsLogs } = require("../models");
const bcrypt = require("bcrypt");
const TransactionDAO = require("../dao/transaction");

class TransactionService extends Service {
  constructor() {
    this.bcrypt = bcrypt;
    this.transactionDAO = new TransactionDAO();
    // ...
  }

  updateTransaction(req) {
    const { transaction_id, status, total_price } = req.body;

    const updateTransactionById = this.transactionDAO.update(transaction_id, {
      status,
      total_price,
    });
  }

  adminAcceptTransaction() {}

  courierCancelTransaction() {}

  createTransaction(req) {
    this.transactionDAO.create(req.body);
  }
}

module.exports = TransactionService;
