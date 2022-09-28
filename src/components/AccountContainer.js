import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

////
import { useState, useEffect } from "react";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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
  /////handling searchh

  // function onSubmitTransaction() {
  //   fetch(" http://localhost:8001/transactions", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(transactions),
  //   });
  // }

  // const filteredTransactions = transactions.filter((transaction) =>
  //   searchResults === ""
  //     ? true
  //     (transactions.filter((transaction) => : transaction.description.includes(searchResults))
  // );
  const filteredTransactions = transactions.filter((transaction) => {
    if (searchResults === "") {
      transaction.description.includes(searchResults);
    } else {
      return true;
    }
  });

  function handleSearch(search) {
    setSearchResults(search);
  }
  return (
    <div>
      <Search onChangeSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList
        transactions={filteredTransactions}
        onDelete={handleDelete}
      />
    </div>
  );
}
export default AccountContainer;
