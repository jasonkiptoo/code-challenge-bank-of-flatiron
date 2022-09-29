import React from "react";

function Transaction({ transaction, onDelete, onEdit }) {
  const { id, date, description, category, amount } = transaction;
  function handleDelete() {
    console.log("i have been clicked");
    onDelete(id);
  }
  function handleEdit() {
    onEdit(id);
  }
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button className="btn btn-success" onClick={handleEdit}>
          Edit
        </button>{" "}
        <button
          className="btn btn-danger"
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              handleDelete();
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
