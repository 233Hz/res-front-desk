import { Navigate, RouteObject } from 'react-router-dom'
import Login from '../pages/Login'
import Layout from '../layout'
import Home from '../pages/Home'
import Resource from '../pages/Resource'
import ResourcePreview from '../pages/ResourcePreview'
import My from '../pages/My'
import NotifyContent from '../pages/NotifyContent'
import DemandContent from '../pages/DemandContent'

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
    children: [
      { path: '/index', element: <Home /> },
      { path: '/resource', element: <Resource /> },
      { path: '/resource/:l1', element: <Resource /> },
      { path: '/resource/:l1/:l2', element: <Resource /> },
      { path: '/resource/:l1/:l2/:l3', element: <Resource /> },
      { path: '/resource-preview/:id', element: <ResourcePreview /> },
      { path: '/my', element: <My /> },
      { path: '/my/:tab', element: <My /> },
      { path: '/notify/:id', element: <NotifyContent /> },
      { path: '/demand/:id', element: <DemandContent /> }
    ]
  }
]

export default routes
