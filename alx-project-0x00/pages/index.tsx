import Header from '../components/layout/Header';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <Header />
      <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Airbnb Application Clone system</h1>
        <p className="mb-4 text-gray-700">
          This application was built using Next.js, TypeScript, and Tailwind CSS.
        </p>
        <button className="border px-3 py-1 text-lg mt-2 bg-blue-500 text-white rounded-full">
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Home;