import React, { useState } from 'react';

export default function FinanceSummary({ user }) {
  const [revenue, setRevenue] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const profit = revenue - expenses;

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold mb-2">Finance Summary</h2>
      <div className="space-y-2">
        <div>
          <label>Revenue: </label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="text-black p-1 rounded"
          />
        </div>
        <div>
          <label>Expenses: </label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            className="text-black p-1 rounded"
          />
        </div>
        <div>
          <strong>Profit: ${profit}</strong>
        </div>
      </div>
    </div>
  );
}
