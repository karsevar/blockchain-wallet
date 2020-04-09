import React, { useState, useEffect } from "react";
import axios from "axios";

import TransactionCard from "./TransactionCard";

function TransactionTable(props) {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   };
  const { currentUserId } = props;
  const [blockChain, setBlockChain] = useState([]);
  const [coinTotal, setCoinTotal] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/chain")
      .then((response) => {
        var transactions = [];

        for (var i = 0; i < response.data.chain.length; i++) {
          transactions.push(...response.data.chain[i].transactions);
        }

        transactions = transactions.filter(
          (transaction) =>
            transaction.recipient === currentUserId ||
            transaction.sender === currentUserId
        );
        console.log("transactions", transactions);

        var sum_coins = 0;
        transactions.forEach((transaction) => {
          if (transaction.recipient === currentUserId) {
            sum_coins = sum_coins + transaction.amount;
          } else if (transaction.sender === currentUserId) {
            sum_coins = sum_coins - transaction.amount;
          }
        });

        setCoinTotal(sum_coins);

        setBlockChain([...transactions]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUserId]);

  return (
    <div className='Transactions-container'>
      <div className='coin-total-container'>
        <h2>
          Wallet Total for UserId {currentUserId}: {coinTotal}
        </h2>
      </div>
      {blockChain.length > 0 ? (
        blockChain.map((transaction) => {
          return (
            <TransactionCard
              amount={transaction.amount}
              recipient={transaction.recipient}
              sender={transaction.sender}
            />
          );
        })
      ) : (
        <p>
          User Id {currentUserId} doesn't seem to have any transactions in the
          chain!
        </p>
      )}
    </div>
  );
}

export default TransactionTable;
