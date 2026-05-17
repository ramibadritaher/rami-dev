import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BUDGETS_COLLECTION, deleteDocument, listDocuments } from "../../../services/appwrite.ts/appwrite";

const BudgetsList = () => {
  const [budgets, setBudgets] = useState([]);

  const loadData = async () => {
    const res = await listDocuments(BUDGETS_COLLECTION);
    setBudgets(res.documents);
  };

  const handleDelete = async (id: string) => {
    await deleteDocument(BUDGETS_COLLECTION, id);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Budgets</h2>
        <Link to="/budgets/create" className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">
          + Add Budget
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <table className="min-w-full text-xs">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Spent</th>
              <th className="px-3 py-2 text-left">Limit</th>
              <th className="px-3 py-2 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {budgets.map((b: any) => (
              <tr key={b.$id} className="border-t">
                <td className="px-3 py-2">{b.name}</td>
                <td className="px-3 py-2">€ {b.spent}</td>
                <td className="px-3 py-2">€ {b.limit}</td>

                <td className="px-3 py-2 text-right space-x-2">
                  <Link to={`/budgets/edit/${b.$id}`} className="text-blue-600 hover:underline">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(b.$id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default BudgetsList;
