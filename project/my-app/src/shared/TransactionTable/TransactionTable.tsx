import React from 'react';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  categoryColor: 'blue' | 'green' | 'yellow';
  amount: string;
  type: 'income' | 'expense';
}

interface TransactionTableProps {
  transactions?: Transaction[];
  onViewAll?: () => void;
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions = [
    {
      id: '1',
      date: '2024-01-12',
      description: 'Groceries',
      category: 'Food',
      categoryColor: 'blue',
      amount: '-€ 45',
      type: 'expense',
    },
    {
      id: '2',
      date: '2024-01-10',
      description: 'Salary',
      category: 'Income',
      categoryColor: 'green',
      amount: '+€ 2,000',
      type: 'income',
    },
    {
      id: '3',
      date: '2024-01-08',
      description: 'Metro Pass',
      category: 'Transport',
      categoryColor: 'yellow',
      amount: '-€ 30',
      type: 'expense',
    },
  ],
  onViewAll,
}) => {
  const getCategoryBgColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      yellow: 'bg-yellow-50 text-yellow-600',
    };
    return colors[color] || 'bg-gray-50 text-gray-600';
  };

  const getAmountColor = (type: string) => {
    return type === 'income' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="lg:col-span-2 bg-white rounded-xl shadow p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">Recent Transactions</h3>
        <button
          onClick={onViewAll}
          className="text-xs text-blue-600 hover:underline transition-colors"
        >
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-3 py-2 text-left">Date</th>
              <th className="px-3 py-2 text-left">Description</th>
              <th className="px-3 py-2 text-left">Category</th>
              <th className="px-3 py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-t hover:bg-gray-50 transition-colors">
                <td className="px-3 py-2">{transaction.date}</td>
                <td className="px-3 py-2">{transaction.description}</td>
                <td className="px-3 py-2">
                  <span className={`px-2 py-1 rounded-full ${getCategoryBgColor(transaction.categoryColor)}`}>
                    {transaction.category}
                  </span>
                </td>
                <td className={`px-3 py-2 text-right ${getAmountColor(transaction.type)}`}>
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
