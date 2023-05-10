import { useSelector } from 'react-redux'
import './assets/css/theme.css'
import Template from './components/Template'
import Login from './components/Login'

function App() {
  const { theme } = useSelector((state) => state.settings)
  const { token } = useSelector((state) => state.auth)
  return (
    <div className={theme}>
      {token ? <Template /> : <Login />}
    </div>
  )
}

export default App
