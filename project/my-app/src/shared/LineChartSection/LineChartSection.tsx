import React from 'react';

interface LineChartSectionProps {
  title?: string;
}

const LineChartSection: React.FC<LineChartSectionProps> = ({
  title = 'Monthly Trend',
}) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-xl shadow p-5">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">{title}</h3>
      <div className="flex items-center justify-center h-56 border border-dashed rounded-lg text-gray-400 text-xs">
        Line Chart Placeholder
      </div>
    </div>
  );
};

export default LineChartSection;
