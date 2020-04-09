import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import UserForm from "./components/UserForm";
import TransactionTable from "./components/TransactionTable";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [userId, setUserId] = useState("");

  console.log("userId", userId);
  return (
    <div className='App'>
      <Link to='/'>View Transactions</Link>
      <Link to='/transaction-form'>Create Transaction</Link>
      <Route
        exact
        path='/'
        render={(props) => (
          <UserForm {...props} submitUser={setUserId} currentUserId={userId} />
        )}
      />
      <Route
        path='/transaction-form'
        render={(props) => (
          <TransactionForm {...props} currentUserId={userId} />
        )}
      />
      {/* <UserForm submitUser={setUserId} currentUserId={userId}></UserForm> */}
      {/* <TransactionTable currentUserId={userId} /> */}
    </div>
  );
}

export default App;
