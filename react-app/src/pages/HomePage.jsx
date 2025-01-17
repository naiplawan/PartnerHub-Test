import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Home Page</h1>
      <Link to="/inputpage">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Go to Input Page
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
