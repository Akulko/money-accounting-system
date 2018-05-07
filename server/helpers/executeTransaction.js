const executeTransaction = (initial, type, amount) => {
  if (type === 'credit') {
    if (initial - amount < 0) {
      throw new Error('Transaction leads to negative amount.');
    }

    return initial - amount;
  }

  if (type === 'debit') {
    return initial + amount;
  }

  throw new Error(
    `Transaction type must be \`debit\` or \`credit\`, got \`${encodeURIComponent(
      type,
    )}\`.`,
  );
};

module.exports = executeTransaction;
