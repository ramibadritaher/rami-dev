import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionsList from './components/transactions/TransactionsList/TransactionsList';
import CreateTransaction from './components/transactions/CreateTransaction/CreateTransaction';
import EditTransaction from './components/transactions/EditTransaction/EditTransaction';
import BudgetsList from './components/budget/BudgetsList/BudgetsList';
import CreateBudget from './components/budget/CreateBudget/CreateBudget';
import EditBudget from './components/budget/EditBudget/EditBudget';
import './App.css'
import PieChart from './shared/pie-chart'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />

        {/* Transactions */}
        <Route path="/transactions" element={<TransactionsList />} />
        <Route path="/transactions/create" element={<CreateTransaction />} />
        <Route path="/transactions/edit/:id" element={<EditTransaction />} />

        {/* Budgets */}
        <Route path="/budgets" element={<BudgetsList />} />
        <Route path="/budgets/create" element={<CreateBudget />} />
        <Route path="/budgets/edit/:id" element={<EditBudget />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
