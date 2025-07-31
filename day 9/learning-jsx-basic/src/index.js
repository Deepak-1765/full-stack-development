// import reactdom
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { VariableInJsx } from './VariableInJsx'

// create root variable
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)