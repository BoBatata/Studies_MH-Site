import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from "./routes/Routes";
import "../src/index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
