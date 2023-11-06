import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style/tailwind.css'
import './style/index.scss'
import './preflight.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
