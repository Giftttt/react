import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import InputState from './components/InputState'
import Calculator from './components/Calculator'
// import App from './App.jsx'
// import Welcome from './components/welcome.jsx'
// import LightToggle from './components/LightToggle.jsx'


//react.StrictMode 에서 React 생략 가능(ReactDom 도 생략 가능)
// id root 자식 com인 app에 넣겠다
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Welcome /> */}
    {/* <LightToggle /> */}
    {/* <InputState /> */}
    <Calculator />
  </StrictMode>,
)
