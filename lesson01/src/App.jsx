import logo from './logo.svg'; // 이미지 파일 import 변수명 logo로 지정
import './App.css';

//day1 - jsx 문법 맛보기
function App() {
  // js 주석기호
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        {/* 주석기호(jsx - js안에서 html 사용하는. 수식이나 변수 넣을때 중괄호 사용*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//js안에 html을 쓰고있음. 아까 app이 있던 자리에 return값 그대로 넣어줌. 변수값 가져올 때 중괄호 사용

export default App;
// export 다른 외부 파일에서 app을 import 할 수 있또록 설정. 없으면 오류남