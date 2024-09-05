import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// @ts-ignore
import { __federation_method_setRemote, __federation_method_getRemote } from 'virtual:__federation__';
import "./index.css";

__federation_method_setRemote('dl', {
  url: () => Promise.resolve('http://localhost:5173/assets/remoteEntry.js'),
  format: 'esm',
  from: 'vite',
});

(async () => {
  const module = await __federation_method_getRemote(
    'dl',
    `./DynamicLoading`
  );
  module.b()
  console.log('module loaded ----');
})();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
