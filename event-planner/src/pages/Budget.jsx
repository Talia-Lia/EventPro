import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const initialData = [
  { name: 'Location', value: 100 },
  { name: 'Food', value: 100 },
  { name: 'Transportation', value: 100 },
  { name: 'Entertainment', value: 100 },
  { name: 'Other', value: 100 },
];

const initialSpendingData = [
  { name: 'Location', spent: 0 },
  { name: 'Food', spent: 0 },
  { name: 'Transportation', spent: 0 },
  { name: 'Entertainment', spent: 0 },
  { name: 'Other', spent: 0 },
];

const colors = ['#0088FE', '#00C49F', '#046307', '#FF8042', '#A569BD'];


const Budget = () => {
  const [data, setData] = useState(initialData);
  const [spendingData, setSpendingData] = useState(initialSpendingData);

  const totalBudget = data.reduce((acc, item) => acc + item.value, 0);
  const totalSpent = spendingData.reduce((acc, item) => acc + item.spent, 0);

  const handleChange = (index, newValue) => {
    const updatedData = [...data];
    updatedData[index].value = newValue === '' ? 0 : Number(newValue);
    setData(updatedData);
  };

  const handleSpendingChange = (index, newValue) => {
    const updatedSpending = [...spendingData];
    updatedSpending[index].spent = newValue === '' ? 0 : Number(newValue);
    setSpendingData(updatedSpending);
  };

  return (
    <div className="min-h-screen text-black px-6 py-10">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold">Budget Planner</h1>
        <p className="text-lg text-gray-700">Track and manage your event budget here.</p>
        <PieChart width={400} height={420}>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={130}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
          <text
            x="50%"
            y="40%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="16px"
            fontWeight="bold"
          >
            Total
          </text>
          <text
            x="50%"
            y="47%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="25px"
            fontWeight="bold"
          >
            ${totalBudget}
          </text>
        </PieChart>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

        <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Edit Budget</h2>
          {data.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-3">
              <label className="font-medium w-1/2">{item.name}:</label>
              <input
                type="number"
                value={item.value === 0 ? '' : item.value}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter amount"
              />
            </div>
          ))}
          <p className="text-sm text-gray-700 italic text-center mt-2">
            * Changes are not saved automatically. Click "Apply Changes" to update.
          </p>
          <button className="bg-blue-500 text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Apply Changes
          </button>
        </div>

       
        <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Record Spending</h2>
          {spendingData.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-3">
              <label className="font-medium w-1/2">{item.name}:</label>
              <input
                type="number"
                value={item.spent === 0 ? '' : item.spent}
                onChange={(e) => handleSpendingChange(index, e.target.value)}
                className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter spent amount"
              />
            </div>
          ))}
          <p className="text-sm text-gray-700 italic text-center mt-2">
            * Changes are not saved automatically. Click "Apply Spending" to update.
          </p>
          <button className="bg-blue-500 text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Apply Spending
          </button>
        </div>
      </div>

     
      <div className="mt-10 bg-white/30 backdrop-blur-sm rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Spending vs Budget Summary</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-2 py-1 border">Category</th>
              <th className="px-2 py-1 border">Budget</th>
              <th className="px-2 py-1 border">Spent</th>
              <th className="px-2 py-1 border">Remaining</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const spent = spendingData[index].spent;
              const remaining = item.value - spent;
              return (
                <tr key={index}>
                  <td className="px-2 py-1 border">{item.name}</td>
                  <td className="px-2 py-1 border">${item.value}</td>
                  <td className="px-2 py-1 border">${spent}</td>
                  <td className={`px-2 py-1 border ${remaining < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    ${remaining}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="px-2 py-1 border font-bold">Total</td>
              <td className="px-2 py-1 border font-bold">${totalBudget}</td>
              <td className="px-2 py-1 border font-bold">${totalSpent}</td>
              <td className="px-2 py-1 border font-bold">${totalBudget - totalSpent}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Budget;
