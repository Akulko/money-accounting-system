import React, { Component } from "react";
import Transactions from "./containers/Transactions";
import store from "./store/createStore";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Transactions
          getData={this.props.getData}
          transactions={this.props.transactions}
          balance={this.props.balance}
        />
      </Provider>
    );
  }
}

export default App;
