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
