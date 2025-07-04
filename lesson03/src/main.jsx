import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { EffectAndRef, FocusInput, PreviousValue } from './RefHookTest'
// import App from "./App_V1.jsx";
// import App from "./ArrayTest.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* //   <App /> */}
  {/* <FocusInput /> */}
  <EffectAndRef />
  <PreviousValue />
   </StrictMode>
)