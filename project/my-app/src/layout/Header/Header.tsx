import React from 'react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  onThemeToggle?: (theme: 'light' | 'dark') => void;
  userInitial?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = 'Dashboard',
  subtitle = 'Overview of your financial activity',
  onThemeToggle,
  userInitial = 'U',
}) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    onThemeToggle?.(newTheme);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleThemeChange('light')}
          className={`px-3 py-1 text-xs rounded-full transition-colors ${
            theme === 'light'
              ? 'bg-gray-100 text-gray-600'
              : 'bg-gray-200 text-gray-500 hover:bg-gray-100'
          }`}
        >
          Light
        </button>
        <button
          onClick={() => handleThemeChange('dark')}
          className={`px-3 py-1 text-xs rounded-full transition-colors ${
            theme === 'dark'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          Dark
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-blue-600 transition-colors">
          {userInitial}
        </div>
      </div>
    </header>
  );
};

export default Header;