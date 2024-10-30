import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-7xl sm:mx-auto">
        <div className="relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1>Dashboard Avec Pro</h1> {/* Teste básico */}
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;

const ProductDashboard = () => {
  console.log('Dashboard rendering...'); // Log de teste

  // Teste básico dos dados
  console.log('avecUsageData:', avecUsageData);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard em construção...</h1>
      {/* Rest of the code... */}
    </div>
  );
};
