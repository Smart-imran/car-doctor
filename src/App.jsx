import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css'; // Ensure Tailwind CSS is imported correctly

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4">
        <div className="flex justify-center gap-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-16 w-16" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-purple-500">Vite + React</h1>
        <div className="card p-4 border rounded-lg shadow-md text-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            <h3 className="text-2xl">Here</h3>
            Count is {count}
          </button>
          <p className="text-blue-600 mt-4">The quick brown fox...</p>
        </div>
        <p className="text-end text-red-600">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
