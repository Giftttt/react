JSX(JavaScript XML)는 React에서 UI를 선언적으로 표현할 수 있게 해주는 문법 확장입니다. HTML과 유사하지만 JavaScript 안에서 동작하며 약간 다른 규칙이 있습니다. 주요 문법과 특징을 아래에 정리합니다.
(원래 html 안에서 js를 작성/실행했는데, jsx는 js안에서 함수가 html tag요소를 return 한다)
✅ 1. JSX 기본 구조

```jsx
const element = <h1>Hello, world!</h1>;
```

- HTML과 유사하지만 JavaScript 코드 안에서 사용됨
- babel(바벨.하나의 컴파일러)이 JSX를 React.createElement()로 변환

✅ 2. 하나의 부모 요소만 리턴

```jsx
function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
```

- 컴포넌트는 반드시 하나의 루트 요소를 반환해야 함
- 여러 요소를 반환하려면 <div> 또는 <></>로 감싸야 함 (비어있는 요소도 가능)

✅ 3. JavaScript 표현식(수식/메소드 실행, 값) 사용 ({} 중괄호)

```jsx
const name = "샘";
const element = <h1>Hello, {name}!</h1>; // 태그 안에서 js 쓸때는 이런 방식 - js처럼 객체를 표현한느 게 아니라 아니라 표현식이다
```

- JSX 안에서는 중괄호 {}로 JavaScript 표현식 사용 가능
- 조건식, 함수 호출, 변수 등 삽입 가능

✅ 4. class → className, for → htmlFor

```jsx
return (
  <div className="box" htmlFor="inputId">
    내용
  </div>
);
```

- HTML 속성과는 다르게 설정함
- class → className , for → htmlFor

✅ 5. 조건부 렌더링

```jsx
// 3항 연산
{
  isLoggedIn ? <Logout /> : <Login />;
}
// if(isLoggedin)
//  <Logout />
//else
//  <login />
```

또는

```jsx
{
  isAdmin && <AdminPanel />;
}
```

- JSX 안에서 삼항 연산자 또는 &&를 사용하여 조건부 렌더링 가능

✅ 6. 스타일 적용 방식

```jsx
const divStyle = { color: "blue", fontSize: "16px" };
// 값이기 때문에 "" 안에 있어야 함. 스타일을 정의한 내용을 하나의 객체로 다룸

return <div style={divStyle}>Styled Text</div>;
```

- style은 객체 형태로 작성 (camelCase 사용 - fontSize는 css는 font-size)

✅ 7. 배열/리스트 렌더링

```jsx
const fruits = ["apple", "banana", "cherry"];
return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```
<!-- react는 for문을 쓰지 않음 map또한 반복문-->

- JSX 안에서 .map() 사용 가능. 많이 사용하는 배열 method(filter, reduce)
- 💥반복 요소에는 반드시 key 속성 필요 ex. li, td
- key로 지정한 값은 중복이 없어야 합니다.

✅ 8. 주석 사용 방법

```jsx
return (
  <div>
    {/* 이건 주석입니다 */}
    <p>Hello</p>
  </div>
);
```

✅ 9. Fragment(파편, 조각) (<></>)

```jsx
return (
  <>
    <Header />
    <Content />
  </>
);
```

- 불필요한 <div> 없이 여러 요소를 그룹화
- <React.Fragment> 또는 축약형 <></> 사용

✅ 10. 컴포넌트 사용
 - 오래된 책은 클래스형 컴포넌트가 나오는데 지금은 거의 사용 안 함

```jsx
// 정의 : 함수형 컴포넌트
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```jsx
<Welcome name="샘" />
```

- 대문자로 시작하는 태그는 사용자 정의 컴포넌트로 인식됨
- props를 통해 데이터 전달 : 부모 component가 자식 component- 대문자로 시작 - 에게 data 전달할 때
    ㄴ component가 계층 구조로 사용됨에 따라 필요

✅ 11. 이벤트 속성

```jsx
<button onClick={handleClick}>클릭</button>
```

- onClick, onChange 등 DOM 이벤트는 camelCase로 작성
- '이벤트 핸들러'- '이벤트를 다뤄주는 애' - handleClick 등 는 함수 참조 또는 람다식(화살표 함수) 사용 가능

✅ 참고: JSX는 결국 JS

```jsx
const element = <h1>Hello, world!</h1>;
```

는 다음 코드로 변환됨:

```js
const element = React.createElement("h1", null, "Hello, world!");
```

```
// open settings
"javascript.updateImportsOnFileMove.enabled": "always"
```
