import React from 'react';
import { useState } from 'react';

function InputPage() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Input Page</h1>
      <input
        type="text"
        placeholder="Enter text"
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={inputValue}
        onChange={handleInputChange}
      />

      <div className="mt-4">
        <p className="text-lg">You entered: {inputValue}</p>
      </div>
    </div>
  );
}

export default InputPage;
