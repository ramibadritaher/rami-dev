import React from 'react';

export interface SummaryCardData {
  label: string;
  value: string;
  trend: string;
  trendType: 'positive' | 'negative' | 'neutral';
}

interface SummaryCardProps extends SummaryCardData {
  valueColor?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  label,
  value,
  trend,
  trendType,
  valueColor = 'text-blue-600',
}) => {
  const trendColor =
    trendType === 'positive'
      ? 'text-green-600'
      : trendType === 'negative'
      ? 'text-red-600'
      : 'text-gray-600';

  return (
    <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`mt-2 text-2xl font-bold ${valueColor}`}>{value}</p>
      <p className={`text-xs ${trendColor} mt-1`}>{trend}</p>
    </div>
  );
};

export default SummaryCard;