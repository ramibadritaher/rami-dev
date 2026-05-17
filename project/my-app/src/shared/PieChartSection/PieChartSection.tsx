import React from 'react';
import PieChart from '../../shared/pie-chart';

interface PieChartSectionProps {
  title?: string;
}

const PieChartSection: React.FC<PieChartSectionProps> = ({
  title = 'Expenses by Category',
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">{title}</h3>
      <PieChart />
    </div>
  );
};

export default PieChartSection;
