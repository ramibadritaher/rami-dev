import React from 'react';
import Sidebar from '../../layout/Sidebar/Sidebar';
import Header from '../../layout/Header/Header';
import SummaryCards from '../../shared/SummaryCards/SummaryCards';
import ChartsSection from '../../shared/ChartsSection/ChartsSection';
import TransactionAndBudgetSection from './budget/TransactionAndBudgetSection/TransactionAndBudgetSection';

interface DashboardProps {
  activePage?: string;
  onThemeToggle?: (theme: 'light' | 'dark') => void;
  onViewAllTransactions?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  activePage = 'dashboard',
  onThemeToggle,
  onViewAllTransactions,
}) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar activePage={activePage} />

      <main className="flex-1 flex flex-col">
        <Header title="Dashboard" subtitle="Overview of your financial activity" onThemeToggle={onThemeToggle} />

        {/* Content */}
        <section className="p-6 space-y-6">
          {/* Summary Cards */}
          <SummaryCards />

          {/* Charts */}
          <ChartsSection />

          {/* Transactions and Budgets */}
          <TransactionAndBudgetSection onViewAllTransactions={onViewAllTransactions} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
