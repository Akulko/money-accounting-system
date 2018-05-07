const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("./helpers/uuid")();
const validateTransaction = require("./helpers/validateTransaction");
const executeTransaction = require("./helpers/executeTransaction");

const app = express();
const db = {
  amount: 0,
  transactions: [
    {
      amount: 111,
      effectiveDate: "2018-05-07T12:20:37.218Z",
      id: 1,
      type: "debit"
    },
    {
      amount: 50,
      effectiveDate: "2018-05-07T12:20:37.218Z",
      id: 2,
      type: "credit"
    }
  ]
};

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/transactions", (req, res) => {
  res.json({ balance: db.amount, transactions: db.transactions });
});

app.post("/transactions", (req, res) => {
  const error = validateTransaction(req.body);

  if (error) {
    return res.status(405).json({ ok: false, error });
  }

  try {
    db.amount = executeTransaction(db.amount, req.body.type, req.body.amount);
    db.transactions.push({
      id: uuid(),
      effectiveDate: new Date().toISOString(),
      amount: req.body.amount,
      type: req.body.type
    });

    res.status(201).json({ ok: true });
  } catch (error) {
    res.status(406).json({ ok: false, error: error.message });
  }
});

app.get("/transactions/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    return res.status(400).json({
      ok: false,
      error: "Invalid transaction ID supplied."
    });
  }

  const transaction = db.transactions.find(item => item.id === parseInt(req.params.id, 10));

  if (transaction) {
    return res.status(200).json(transaction);
  }

  res.status(404).json({
    ok: false,
    error: "Transaction with supplied ID was not found."
  });
});

app.delete("/transactions/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    return res.status(400).json({
      ok: false,
      error: "Invalid transaction ID supplied."
    });
  }

  const transaction = db.transactions.find(item => item.id === parseInt(req.params.id, 10));

  if (transaction) {
    db.transactions = db.transactions.filter(item => item.id !== parseInt(req.params.id, 10));

    return res.status(200).json({ ok: true });
  }

  res.status(404).json({
    ok: false,
    error: "Transaction with supplied ID was not found."
  });
});

app.listen(3030);
