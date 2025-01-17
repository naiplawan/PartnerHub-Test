'use client';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl text-black font-bold mb-8">About Page</h1>
      <Link href="/">
        <span className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Go to Home Page
        </span>
      </Link>
    </div>
  );
}
