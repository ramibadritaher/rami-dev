import React from 'react';

export interface BudgetItemData {
  id: string;
  name: string;
  spent: string;
  limit: string;
  percentage: number;
  color: 'blue' | 'yellow' | 'purple';
}

interface BudgetItemProps extends BudgetItemData {}

const BudgetItem: React.FC<BudgetItemProps> = ({
  name,
  spent,
  limit,
  percentage,
  color,
}) => {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
  };

  return (
    <div className="space-y-4 text-xs">
      <div>
        <div className="flex justify-between mb-1">
          <span className="font-medium text-gray-700">{name}</span>
          <span className="text-gray-600">
            {spent} / {limit}
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className={`${colorMap[color]} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BudgetItem;
