import React from 'react';
import type { SummaryCardData } from '../SummaryCardProps/SummaryCard';
import SummaryCard from '../SummaryCardProps/SummaryCard';
interface SummaryCardsProps {
  cards?: SummaryCardData[];
}

const SummaryCards: React.FC<SummaryCardsProps> = ({
  cards = [
    {
      label: 'Total Income',
      value: '€ 4,250',
      trend: '+12% vs last month',
      trendType: 'positive',
    },
    {
      label: 'Total Expenses',
      value: '€ 2,980',
      trend: '-3% vs last month',
      trendType: 'negative',
    },
    {
      label: 'Current Balance',
      value: '€ 1,270',
      trend: 'Updated just now',
      trendType: 'neutral',
    },
  ],
}) => {
  const colors = [
    { value: 'text-green-600' },
    { value: 'text-red-600' },
    { value: 'text-blue-600' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <SummaryCard
          key={index}
          {...card}
          valueColor={colors[index]?.value || 'text-blue-600'}
        />
      ))}
    </div>
  );
};

export default SummaryCards;
