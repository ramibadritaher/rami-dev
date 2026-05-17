import React from 'react';
import type { BudgetItemData } from '../BudgetItem/BudgetItem';
import BudgetItem from '../BudgetItem/BudgetItem';

interface BudgetListProps {
  title?: string;
  budgets?: BudgetItemData[];
}

const BudgetList: React.FC<BudgetListProps> = ({
  title = 'Budgets',
  budgets = [
    {
      id: '1',
      name: 'Food',
      spent: '€ 620',
      limit: '€ 800',
      percentage: 77,
      color: 'blue',
    },
    {
      id: '2',
      name: 'Transport',
      spent: '€ 180',
      limit: '€ 250',
      percentage: 72,
      color: 'yellow',
    },
    {
      id: '3',
      name: 'Entertainment',
      spent: '€ 140',
      limit: '€ 200',
      percentage: 70,
      color: 'purple',
    },
  ],
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">{title}</h3>

      <div className="space-y-4">
        {budgets.map((budget) => (
          <BudgetItem key={budget.id} {...budget} />
        ))}
      </div>
    </div>
  );
};

export default BudgetList;
