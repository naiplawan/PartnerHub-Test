import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <h1 className="text-4xl text-black font-bold mb-8">Hello Next.js! </h1>
      <div className="flex flex-row space-x-4">
        <Link href="/about">
          <span className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Go to About Page
          </span>
        </Link>
        <Link href="/dashboard">
          <span className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Go to Dashboard Page
          </span>
        </Link>
      </div>
    </div>
  );
}
