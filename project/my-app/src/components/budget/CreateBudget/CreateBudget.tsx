import React from 'react';
import { BUDGETS_COLLECTION, createDocument } from '../../../services/appwrite.ts/appwrite';
import BudgetForm from '../BudgetForm/BudgetForm';

const CreateBudget = () => {
  const handleSubmit = async (data: any) => {
    await createDocument(BUDGETS_COLLECTION, data);
    window.location.href = "/budgets";
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Add Budget</h2>
      <BudgetForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateBudget;
