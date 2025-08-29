import React from 'react';
import { useDashboard } from '../hooks/useDashboard';

const Dashboard: React.FC = () => {
  const { user, handleLogout } = useDashboard();

  return (
    <div className="min-h-screen relative overflow-hidden" 
         style={{
           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
         }}>
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-indigo-400 rounded-full opacity-15 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-purple-600 rounded-full opacity-20 blur-2xl animate-bounce"></div>

      {/* Header */}
      <header className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                Test Application
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-white">
                <span className="text-blue-100">Welcome back,</span>
                <span className="font-semibold ml-1">{user?.name}!</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm border border-white border-opacity-30 hover:scale-105"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Welcome to the Platform
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            You have successfully authenticated and gained access to our test application. 
            This demonstrates a complete authentication flow with modern UI design.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Secure Authentication</h3>
            <p className="text-blue-100">
              Advanced security measures with JWT tokens and encrypted password storage.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Modern UI Design</h3>
            <p className="text-blue-100">
              Professional interface with smooth animations and responsive design patterns.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-pink-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">High Performance</h3>
            <p className="text-blue-100">
              Optimized React components with efficient state management and fast loading.
            </p>
          </div>
        </div>

        {/* User Information Card */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Account Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <dt className="text-sm font-medium text-blue-200 mb-1">Full Name</dt>
              <dd className="text-lg font-semibold text-white">{user?.name}</dd>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <dt className="text-sm font-medium text-blue-200 mb-1">Email Address</dt>
              <dd className="text-lg font-semibold text-white">{user?.email}</dd>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 md:col-span-2">
              <dt className="text-sm font-medium text-blue-200 mb-1">User ID</dt>
              <dd className="text-lg font-semibold text-white font-mono">{user?.id}</dd>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-blue-200">
            This is a test application demonstrating modern authentication patterns and professional UI design.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
