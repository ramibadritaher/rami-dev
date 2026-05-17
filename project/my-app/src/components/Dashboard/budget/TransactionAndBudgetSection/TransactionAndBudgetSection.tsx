import React from 'react';
import type { Transaction } from '../../../../shared/TransactionTable/TransactionTable';
import TransactionTable from '../../../../shared/TransactionTable/TransactionTable';
import BudgetList from '../BudgetList/BudgetList';


interface TransactionAndBudgetSectionProps {
  transactions?: Transaction[];
  budgets?: any[];
  onViewAllTransactions?: () => void;
}

const TransactionAndBudgetSection: React.FC<TransactionAndBudgetSectionProps> = ({
  transactions,
  budgets,
  onViewAllTransactions,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <TransactionTable transactions={transactions} onViewAll={onViewAllTransactions} />
      <BudgetList budgets={budgets} />
    </div>
  );
};

export default TransactionAndBudgetSection;
