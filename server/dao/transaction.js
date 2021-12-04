const Service = require("./service");
const { Users, Transactions, TransactionsLogs } = require("../models");
const bcrypt = require("bcrypt");

class TransactionDAO {
  constructor() {
    this.bcrypt = bcrypt;
    // ...
  }

  async create(newTransaction) {
    const createTransaction = await Transactions.create(newTransaction);

    // Log to database

    return createTransaction;
  }

  update(transaction_id, newTransaction) {
    const { status, total_price } = newTransaction;

    const updateTransactionById = await Transactions.update(
      {
        status,
        total_price,
      },
      {
        where: {
          transaction_id,
        },
      }
    );

    if (status) {
      const logTransaction = await TransactionsLogs.create({
        transaction_id,
        status,
        updated_at: Date.now(),
      });
    }

    return updateTransactionById;
  }

  find(query) {
    const findUsers = Users.findAll(query, {
      fields: {
        exclude: ["password"],
      },
    });
  }
}

module.exports = TransactionDAO;
