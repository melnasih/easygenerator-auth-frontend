import React from 'react';
import { Link } from 'react-router-dom';
import { useSignin } from '../hooks/useSignin';

const SigninForm: React.FC = () => {
  const { register, handleSubmit, errors, isLoading, onSubmit } = useSignin();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" 
         style={{
           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
         }}>
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-pink-400 rounded-full opacity-30 blur-lg animate-bounce"></div>
      <div className="absolute bottom-32 left-40 w-40 h-40 bg-indigo-400 rounded-full opacity-15 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-600 rounded-full opacity-25 blur-xl animate-bounce"></div>
      
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto px-8">
        {/* Left side - Branding */}
        <div className="flex-1 text-white pr-16">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Test Application
            <br />
            <span className="text-3xl font-normal text-blue-200">
              Authentication System
            </span>
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
            This is a comprehensive test case solution demonstrating modern authentication 
            patterns with secure user management and professional UI design.
          </p>
        </div>

        {/* Right side - Login Form */}
        <div className="w-96">
          <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign In</h2>
              <p className="text-gray-600 text-sm">
                Access your test account
              </p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  {...register('email')}
                  type="email"
                  autoComplete="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  {...register('password')}
                  type="password"
                  autoComplete="current-password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200 hover:scale-105 shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
