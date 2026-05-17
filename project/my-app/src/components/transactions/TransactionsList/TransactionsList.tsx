import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Transaction = {
  id: number;
  date: string; // ISO date
  desc: string;
  category: string;
  amount: number; // positive for credit, negative for debit
};

const sampleData: Transaction[] = [
  { id: 1, date: "2024-01-12", desc: "Groceries", category: "Food", amount: -45 },
  { id: 2, date: "2024-01-10", desc: "Salary", category: "Income", amount: 2000 },
  { id: 3, date: "2024-01-08", desc: "Metro Pass", category: "Transport", amount: -30 },
];

useEffect(() => {
    // Simulate fetching transactions from an API
    const fetchTransactions = async (data: Transaction[]) => {
        // Replace with actual API call
        const data: Transaction[] = await new Promise(resolve => setTimeout(() => resolve(sampleData), 1000));
    }}, []
  );


const TransactionsList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(sampleData);

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString();
    } catch {
      return iso;
    }
  };

  const currency = new Intl.NumberFormat(undefined, { style: "currency", currency: "EUR" });
  const formatAmount = (amt: number) => currency.format(amt);

  const handleDelete = (id: number) => {
    if (window.confirm("Delete this transaction?")) {
      setTransactions(prev => prev.filter(t => t.id !== id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4 items-center">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <Link
          to="/transactions/create"
          className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm"
          aria-label="Add transaction"
        >
          + Add Transaction
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow p-5 overflow-x-auto">
        {transactions.length === 0 ? (
          <p className="text-sm text-gray-600">No transactions yet. Click "Add Transaction" to create one.</p>
        ) : (
          <table className="min-w-full text-xs" aria-label="Transactions table">
            <caption className="sr-only">Recent transactions</caption>
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th scope="col" className="px-3 py-2 text-left">Date</th>
                <th scope="col" className="px-3 py-2 text-left">Description</th>
                <th scope="col" className="px-3 py-2 text-left">Category</th>
                <th scope="col" className="px-3 py-2 text-right">Amount</th>
                <th scope="col" className="px-3 py-2 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {transactions.map(t => (
                <tr key={t.id} className="border-t">
                  <td className="px-3 py-2">{formatDate(t.date)}</td>
                  <td className="px-3 py-2">{t.desc}</td>
                  <td className="px-3 py-2">{t.category}</td>
                  <td
                    className={`px-3 py-2 text-right ${t.amount < 0 ? "text-red-600" : "text-green-600"}`}
                  >
                    {formatAmount(t.amount)}
                  </td>
                  <td className="px-3 py-2 text-right space-x-2">
                    <Link
                      to={`/transactions/edit/${t.id}`}
                      className="text-blue-600 hover:underline"
                      aria-label={`Edit transaction ${t.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(t.id)}
                      className="text-red-600 hover:underline"
                      aria-label={`Delete transaction ${t.id}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TransactionsList;
