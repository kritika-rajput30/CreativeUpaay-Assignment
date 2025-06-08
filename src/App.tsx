import React from 'react';
import { Dashboard } from './pages/Dashboard';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { useSelector } from 'react-redux';
import type { RootState } from './app/store';
import './index.css';

function App() {
  const activities = useSelector((state: RootState) => state.activityLog.activities);
  return (
    <div className="flex h-screen w-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 ml-64">
        <Header />
        <main className="flex-1 overflow-x-auto px-8 py-6">
          <Dashboard />
         
        </main>
      </div>
      </div>
  );
}

export default App;
