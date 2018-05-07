const validateTransaction = transaction => {
  if (typeof transaction !== 'object') {
    return `Transaction must be an object, got \`${typeof transaction}\`.`;
  }

  if (transaction.type !== 'debit' && transaction.type !== 'credit') {
    return `Transaction type must be \`debit\` or \`credit\`, got \`${encodeURIComponent(
      transaction.type,
    )}\`.`;
  }

  if (isNaN(transaction.amount)) {
    return 'Transaction amount must be a number.';
  }

  if (transaction.amount <= 0) {
    return 'Transaction amount must be greater than zero.';
  }

  return null;
};

module.exports = validateTransaction;
