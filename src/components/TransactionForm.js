import React, { useState, useEffect } from "react";

function TransactionForm(props) {
  const { currentUserId } = props;

  const [newTransaction, setNewTransaction] = useState({
    sender: currentUserId,
    recipient: "",
    amount: "",
  });

  const handleChange = (event) => {
    setNewTransaction({
      ...newTransaction,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting following", newTransaction);
    setNewTransaction({ sender: currentUserId, recipient: "", amount: "" });
  };
  return (
    <div className='transaction-form-container'>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='sender'
          value={newTransaction.sender}
          name='sender'
          onChange={handleChange}
        />
        <input
          placeholder='recipient'
          value={newTransaction.recipient}
          name='recipient'
          onChange={handleChange}
        />
        <input
          placeholder='amount'
          value={newTransaction.amount}
          name='amount'
          onChange={handleChange}
        />
        <button type='submit'>Submit Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
