import React, { useState, useEffect } from "react";
import "./App.css";

import UserForm from "./components/UserForm";
import TransactionTable from "./components/TransactionTable";

function App() {
  const [userId, setUserId] = useState("");

  console.log("userId", userId);
  return (
    <div className='App'>
      <UserForm submitUser={setUserId} currentUserId={userId}></UserForm>
      <TransactionTable currentUserId={userId} />
    </div>
  );
}

export default App;
