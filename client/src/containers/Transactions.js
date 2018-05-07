import { connect } from "react-redux";
import Transactions from "../components/Transactions";
import { getData } from "../store/modules/transactions/action";

function mapStateToProps(state) {
  return {
    transactions: state.data.transactions,
    balance: state.data.balance
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(getData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
