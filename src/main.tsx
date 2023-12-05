import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// @ts-expect-error temporary
import twconfig from '../tailwind.config.js'

console.log(twconfig)

if (process.env.NODE_ENV === 'development') {
  // @ts-expect-error https://github.com/impulse-oss/impulse/pull/14
  import('@impulse.dev/runtime').then((impulse) => impulse.run({
    tailwindConfig: twconfig,
  }));
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
