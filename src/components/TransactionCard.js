import React from "react";

function TransactionCard(props) {
  return (
    <div className='card-container'>
      <h4>recipient: {props.recipient}</h4>
      <h4>amount: {props.amount}</h4>
      <h4>sender: {props.sender}</h4>
    </div>
  );
}

export default TransactionCard;
