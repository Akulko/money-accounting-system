import React from "react";
import Card from "./Card";
import { Accordion } from "react-accessible-accordion";
import "../App.css";

class Transactions extends React.Component {
  componentWillMount() {
    this.props.getData();
  }

  renderCards = () => {
    console.log(this.props);
    return (
      <Accordion>
        {this.props.transactions.map(item => <Card key={item.id} balance={this.props.balance} {...item} />)}
      </Accordion>
    );
  };

  render() {
    return Array.isArray(this.props.transactions) ? this.renderCards() : null;
  }
}

export default Transactions;
