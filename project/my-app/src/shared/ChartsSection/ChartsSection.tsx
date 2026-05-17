import React from 'react';
import LineChartSection from '../LineChartSection/LineChartSection';
import PieChartSection from '../PieChartSection/PieChartSection';

const ChartsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <PieChartSection />
      <LineChartSection />
    </div>
  );
};

export default ChartsSection;
