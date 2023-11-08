import { useRoutes } from 'react-router-dom'
import './App.scss'
import routes from './router'

function App() {
  const element = useRoutes(routes)
  return <div id="app">{element}</div>
}

export default App
