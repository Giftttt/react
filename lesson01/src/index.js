import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from 'App';
import reportWebVitals from './reportWebVitals';
import App3 from './component/App3';
// import App2 from './component/App2';


//import는 외부 파일의 함수, 라이브러리 사용할 때 미라ㅣ 가져오기(메모리 로드)

// App은 화면을 구성하는 component (UI) 이름
const root = ReactDOM.createRoot(document.getElementById('root'));
// App component에서 정의한 요소들을 createElement, appendchild
// 
// StrictMode - 문법 엄격히 지킴
root.render(
  <React.StrictMode> 
    {/* <App /> */}
    {/* <App2 /> */}
    <App3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 화면에서 확인하기 전에 component test용이 별도로 함수로 구현
reportWebVitals();
