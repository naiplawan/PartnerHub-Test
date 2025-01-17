'use client';
import React from 'react';

export default function Todos({ todos, error }) {
  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red">เกิดข้อผิดพลาด: {error}</div>;
  }

  if (!todos) {
    return <div className="flex items-center justify-center min-h-screen text-black">กำลังโหลด...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-5">
      <h1 className="text-4xl font-bold mb-8 text-black mt-4">Todos</h1>
      <ul className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-4">
        {todos.map((todo) => (
          <li key={todo.id} className="p-2 border rounded-lg bg-white text-black">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
