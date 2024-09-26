import React from 'react';
import { Line } from '@ant-design/charts';

const ChartComponent = ({ sortedTransactions }) => {
  const data = sortedTransactions.map((item) => {
    return { date: item.date, amount: item.amount };
  });

  const config = {
    data,
    xField: 'date',
    yField: 'amount',
  };

  return (
    <div className="card">
      <Line {...config} />
    </div>
  );
};

export default ChartComponent;
