import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <p className="mb-4">Welcome, {user?.username || 'Guest'}!</p>
    </div>
  );
}

export default Dashboard;