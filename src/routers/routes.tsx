import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import { createBrowserRouter } from 'react-router-dom'
import { AboutRoutes } from './AboutRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '', element: <Home /> }, AboutRoutes],
  },
])

export default router
