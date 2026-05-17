import React from 'react';

interface NavItem {
  icon: string;
  label: string;
  id: string;
}

interface SidebarProps {
  activePage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage = 'dashboard' }) => {
  const navItems: NavItem[] = [
    { icon: '🏠', label: 'Dashboard', id: 'dashboard' },
    { icon: '📄', label: 'Transactions', id: 'transactions' },
    { icon: '📊', label: 'Budgets', id: 'budgets' },
    { icon: '⚙️', label: 'Settings', id: 'settings' },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg hidden md:flex md:flex-col">
      <div className="px-6 py-5 border-b">
        <h1 className="text-2xl font-bold text-blue-600">SmartFinance</h1>
        <p className="text-xs text-gray-500">Dashboard</p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block px-3 py-2 rounded-lg text-sm ${
              activePage === item.id
                ? 'bg-blue-50 text-blue-600 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item.icon} {item.label}
          </a>
        ))}
      </nav>

      <div className="px-6 py-4 border-t text-xs text-gray-400">
        © 2024 SmartFinance
      </div>
    </aside>
  );
};

export default Sidebar;