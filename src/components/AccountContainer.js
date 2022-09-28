import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import axios from "axios";
////
import { useState, useEffect } from "react";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  ////handle Delete
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

  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList transactions={transactions} onDelete={handleDelete} />
    </div>
  );
}
export default AccountContainer;
