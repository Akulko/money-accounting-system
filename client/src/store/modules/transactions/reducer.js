const initialState = {
  balance: 100,
  transactions: []
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_DATA":
      return { balance: payload.data.balance, transactions: payload.data.transactions };
    default:
      return state;
  }
}

export default reducer;
