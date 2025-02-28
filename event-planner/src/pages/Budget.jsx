import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { Transition } from "@headlessui/react";

const initialData = [
  { name: 'Housing', value: 800 },
  { name: 'Food', value: 400 },
  { name: 'Transportation', value: 200 },
  { name: 'Entertainment', value: 100 },
  { name: 'Other', value: 300 },
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A569BD'];

const Budget = () => {
  const [data, setData] = useState(initialData);
  const totalBudget = data.reduce((acc, item) => acc + item.value, 0);

  const handleChange = (index, newValue) => {
    const updatedData = [...data];
    updatedData[index].value = newValue === '' ? 0 : Number(newValue);
    setData(updatedData);
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 text-gray-800 p-10">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold">Budget Planner</h1>
        <p className="text-lg text-gray-600">Track and manage your event budget here.</p>

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
          <text x="50%" y="40%" textAnchor="middle" dominantBaseline="middle" fontSize="16px" fontWeight="bold">
            Total
          </text>
          <text x="50%" y="47%" textAnchor="middle" dominantBaseline="middle" fontSize="25px" fontWeight="bold">
            ${totalBudget}
          </text>
        </PieChart>

      </div>


        <div className="ml-10 bg-gray-200 rounded-lg p-6 shadow-lg w-80">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">Edit Budget</h2>

          {data.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-3">
              <label className="text-gray-600 font-medium w-1/2">{item.name}:</label>
              <input
                type="number"
                value={item.value === 0 ? '' : item.value}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter amount"
              />
            </div>
          ))}

          <p className="text-sm text-gray-500 italic text-center mt-2">
            * Changes are not saved automatically. Click "Apply Changes" to update.
          </p>
          <button className="bg-blue-500 text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Apply Changes
          </button>
        </div>
    </div>
  );
};

export default Budget;
