import React, { useState } from "react";

function AddTransactionForm(props) {
  const [transaction, setTransactions] = useState([]);
  // gets input from the fields and store them in setTransactions

  function getFieldValue(event) {
    setTransactions({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  }
  ///on submitt button when clicked
  const addTransaction = () => {
    // props.onSubmitTransaction(transaction);
    fetch(" http://localhost:8001/transactions", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    });
  };
  return (
    <div className="ui segment">
      <form
        className="ui form"
        onSubmit={(event) => {
          addTransaction(event);
        }}
      >
        <div className="inline fields">
          <input type="date" name="date" onChange={getFieldValue} />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={getFieldValue}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={getFieldValue}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            onChange={getFieldValue}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
