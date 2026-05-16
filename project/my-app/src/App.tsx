import { useState } from 'react'
import './App.css'
import PieChart from './shared/pie-chart'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <body className="bg-gray-100">
         <Dashboard></Dashboard>
     </body>
 
    </>
  )
}

export default App
