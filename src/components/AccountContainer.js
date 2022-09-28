import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

////
import { useState, useEffect } from "react";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  ////handle Delete ////////
  const handleDelete = (deletedTransaction) => {
    setTransactions(
      transactions.filter(
        (transaction) => transaction.id !== deletedTransaction
      )
    );
  };
  const getTransaction = () => {
    fetch("http://localhost:8001/transactions")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTransactions(data);
        // console.log(data);
      });
  };
  useEffect(() => {
    getTransaction();
  }, []);
  function onSubmitTransaction() {
    fetch(" http://localhost:8001/transactions", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transactions),
    });
  }
  return (
    <div>
      <Search />
      <AddTransactionForm transactions={onSubmitTransaction} />
      <TransactionsList transactions={transactions} onDelete={handleDelete} />
    </div>
  );
}
export default AccountContainer;
