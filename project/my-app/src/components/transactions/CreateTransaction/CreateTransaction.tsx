import React from "react";
import { createDocument, TRANSACTIONS_COLLECTION } from "../../../services/appwrite.ts/appwrite";
import TransactionForm from "../TransactionForm/TransactionForm";

const CreateTransaction = () => {
  const handleSubmit = async (data: any) => {
    await createDocument(TRANSACTIONS_COLLECTION, data);
    window.location.href = "/transactions";
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
      <TransactionForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateTransaction;
