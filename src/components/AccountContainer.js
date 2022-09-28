import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import axios from "axios";

////
import { useState, useEffect } from "react";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  ////handle Delete ////////
  const handleDelete = async (deletedTransaction) => {
    window.alert("FILE HAS BEEN DELETED");
    setTransactions(
      transactions.filter(
        (transaction) => transaction.id !== deletedTransaction
      )
    );
  };

  const onEdit = async (deletedTransaction) => {
    window.alert("Not yet implemented");
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
  /////handling searchh
  function searchTransaction(e) {
    setTransactions(
      transactions.filter((transaction) =>
        transaction.description
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
    );
  }

  // function searchTransaction(e) {
  //   if (searchResults === "") {
  //     return true;
  //   } else {
  //     setTransactions(
  //       transactions.filter((transaction) =>
  //         transaction.description
  //           .toLowerCase()
  //           .includes(e.target.value.toLowerCase())
  //       )
  //     );
  //   }
  // }
  // function handleSearch(search) {
  //   setSearchResults(search);
  // }
  return (
    <div>
      <Search searchTransaction={searchTransaction} />
      <AddTransactionForm />
      <TransactionsList
        transactions={transactions}
        onDelete={handleDelete}
        onEdit={onEdit}
      />
    </div>
  );
}
export default AccountContainer;
