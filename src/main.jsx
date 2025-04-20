import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,} from "react-router";
import './index.css'
import router from './routes/Routes.jsx';
import CartProvider from './providers/CartProvider.jsx';
import { Toaster } from 'react-hot-toast';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster position='bottom-right' />
    </CartProvider>
  </StrictMode>,
)
