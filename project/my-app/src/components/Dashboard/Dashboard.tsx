import React from 'react';
import PieChart from '../../shared/pie-chart';

interface Props {
}

const Dashboard = (props: Props) => {
     return (
        <>

    <div className="flex min-h-screen">
    
      <aside className="w-64 bg-white shadow-lg hidden md:flex md:flex-col">
        <div className="px-6 py-5 border-b">
          <h1 className="text-2xl font-bold text-blue-600">SmartFinance</h1>
          <p className="text-xs text-gray-500">Dashboard</p>
        </div>
    
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a className="block px-3 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium">🏠 Dashboard</a>
          <a className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 text-sm">📄 Transactions</a>
          <a className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 text-sm">📊 Budgets</a>
          <a className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 text-sm">⚙️ Settings</a>
        </nav>
    
        <div className="px-6 py-4 border-t text-xs text-gray-400">
          © 2024 SmartFinance
        </div>
      </aside>
    
      <main className="flex-1 flex flex-col">
    
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <p className="text-xs text-gray-500">Overview of your financial activity</p>
          </div>
    
          <div className="flex items-center space-x-3">
            <button className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">Light</button>
            <button className="px-3 py-1 text-xs rounded-full bg-gray-800 text-white">Dark</button>
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">U</div>
          </div>
        </header>
    
        {/* Content */}
        <section className="p-6 space-y-6">
    
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-xl shadow">
              <p className="text-xs text-gray-500">Total Income</p>
              <p className="mt-2 text-2xl font-bold text-green-600">€ 4,250</p>
              <p className="text-xs text-gray-400 mt-1">+12% vs last month</p>
            </div>
    
            <div className="p-5 bg-white rounded-xl shadow">
              <p className="text-xs text-gray-500">Total Expenses</p>
              <p className="mt-2 text-2xl font-bold text-red-600">€ 2,980</p>
              <p className="text-xs text-gray-400 mt-1">-3% vs last month</p>
            </div>
    
            <div className="p-5 bg-white rounded-xl shadow">
              <p className="text-xs text-gray-500">Current Balance</p>
              <p className="mt-2 text-2xl font-bold text-blue-600">€ 1,270</p>
              <p className="text-xs text-gray-400 mt-1">Updated just now</p>
            </div>
          </div>
    
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    
            {/* Pie Chart */}
            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Expenses by Category</h3>
                <PieChart />
            </div>
    
            {/* Line Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Monthly Trend</h3>
              <div className="flex items-center justify-center h-56 border border-dashed rounded-lg text-gray-400 text-xs">
                Line Chart Placeholder
              </div>
            </div>
    
          </div>
    
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">Recent Transactions</h3>
                <button className="text-xs text-blue-600 hover:underline">View all</button>
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
                    <tr className="border-t">
                      <td className="px-3 py-2">2024-01-12</td>
                      <td className="px-3 py-2">Groceries</td>
                      <td className="px-3 py-2"><span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600">Food</span></td>
                      <td className="px-3 py-2 text-right text-red-600">-€ 45</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2">2024-01-10</td>
                      <td className="px-3 py-2">Salary</td>
                      <td className="px-3 py-2"><span className="px-2 py-1 rounded-full bg-green-50 text-green-600">Income</span></td>
                      <td className="px-3 py-2 text-right text-green-600">+€ 2,000</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-3 py-2">2024-01-08</td>
                      <td className="px-3 py-2">Metro Pass</td>
                      <td className="px-3 py-2"><span className="px-2 py-1 rounded-full bg-yellow-50 text-yellow-600">Transport</span></td>
                      <td className="px-3 py-2 text-right text-red-600">-€ 30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    
            {/* Budgets */}
            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Budgets</h3>
    
              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Food</span>
                    <span>€ 620 / € 800</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '77%' }}></div>
                  </div>
                </div>
    
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Transport</span>
                    <span>€ 180 / € 250</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
    
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Entertainment</span>
                    <span>€ 140 / € 200</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
    
              </div>
            </div>
    
          </div>
    
        </section>
    
      </main>
    
    </div><script type="module" src=""></script>
            </>
      )
};

export default Dashboard;
