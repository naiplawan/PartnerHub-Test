import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">React App</h1>
      <div className='flex flex-row space-x-4'>
      <Link to="/inputpage">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Go to Input Page
        </button>
      </Link>
      <Link to="/todopage">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Go to Todo-list Page
        </button>
      </Link>
      </div>

    </div>
  );
}

export default HomePage;
