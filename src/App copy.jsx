import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <figure className="mb-8 flex-col rounded-xl bg-slate-100 p-8 md:flex dark:bg-slate-800">
          <img
            className="mx-auto h-24 w-24 rounded-full"
            src="/src/assets/avatar.png"
            alt=""
            width="384px"
            height="512px"
          />
          <div className="space-y-4 pt-6 text-center md:p-8 md:pb-0">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I&apos;ve seen scale on large teams.
                It&apos;s easy to customize, adapts to any design, and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-500">Staff Engineer, Algolia</div>
            </figcaption>
          </div>
        </figure>
      </div>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React, hello world</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count},hahaha,fengyuelife
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
