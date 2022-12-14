import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

////
import { useState, useEffect } from "react";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  ////handle Delete ////////
  const handleDelete = async (deletedTransaction) => {
       fetch(`http://localhost:8001/transactions/${deletedTransaction}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedTransaction = transactions.filter((q) => {
          return q.id !== deletedTransaction;
        });
        setTransactions(updatedTransaction);
      });
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
