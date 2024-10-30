import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import AvatarPng from './assets/avatar.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <figure className="mb-8 flex-col rounded-xl bg-slate-100 p-8 md:flex dark:bg-slate-800">
          <img
            className="mx-auto h-24 w-24 rounded-full"
            src={AvatarPng}
            alt=""
            width="384px"
            height="512px"
          />
          <div className="space-y-4 pt-6 text-center md:p-8 md:pb-0">
            <blockquote>
              <p className="text-lg font-medium">
                &quot;The first test site of FengYue, moving towards the future!&quot;
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Feng Yue</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Frontend Engineer, Alibaba
              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      <h1 className="text-3xl font-bold underline">
        fengyue.life，Hello world!
        <br />
        {process.env.VITE_QWEN_API_KEY || '未找到API KEY'}
        <br />
        {console.log('环境变量:', process.env)}
      </h1>
      <div className="flex flex-row items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React + Tailwind CSS + Cloudflare + Aliyun Bailian</h2>
      <div className="card">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
          onClick={() => setCount((count) => count + 1)}
        >
          click me, current count is <span className="text-xl font-bold">{count}</span>
        </button>
      </div>
    </>
  );
}

export default App;
