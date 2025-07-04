import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScheduleTable from './ScheduleTable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* usestate 복습 */}
    <ScheduleTable />
  </StrictMode>,
)
