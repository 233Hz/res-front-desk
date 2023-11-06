import { Navigate, RouteObject } from 'react-router-dom'
import Login from '../pages/Login'
import Layout from '../pages/Layout'
import Home from '../pages/Home'

/**
 * 路由懒加载
 * https://juejin.cn/post/7249380394457202743
 */
const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Navigate to='/index' />
  },
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/index', element: <Home /> }]
  }
]

export default routes
