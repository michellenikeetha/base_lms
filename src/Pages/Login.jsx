import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <div className="flex justify-center mb-4">
          {/* Placeholder for the book icon */}
          <span className="text-blue-500 text-3xl">📘</span>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Sign In to EduLearn</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="**********"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm">
            Don't Have an Account?{' '}
            <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
