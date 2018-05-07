import React from "react";
import moment from "moment";
import { AccordionItem, AccordionItemTitle, AccordionItemBody } from "react-accessible-accordion";

const Card = props => {
  return (
    <AccordionItem className={props.type}>
      <AccordionItemTitle>
        Transaction: {props.type === "credit" ? "- " : "+ "}
        {props.amount}
      </AccordionItemTitle>

      <AccordionItemBody>
        <p>{props.type === "credit" ? "Credit" : "Debit"}</p>
        <p>{moment(props.effectiveDate).format("DD MMMM, HH:mm:ss")}</p>
        <p>Balance: {props.balance}</p>
      </AccordionItemBody>
    </AccordionItem>
  );
};
export default Card;
