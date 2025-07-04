import { useRef, useState } from 'react'
import TodoList from './components/TodoList'
import TodoInsert from './components/TodoInsert'
import TodoTemplate from './components/TodoTemplate'


// day3 04 : 컴포넌트 리팩토링해서 사용
// day4 01 : childern 속성 사용해서 완성함.
//            useRef() 훅으로 재렌더링 횟수 비교(App_V1.jsx)
export default function App() {
  // const renderCount = useRef(0) // useRef는 리액트 함수(훅) - 얘는 값이 바껴도 렌더링에 영향을 주지 않음
  // renderCount.current +=1



  // 할일 목록 배열
  const initVal = [
    {
      id: 1,
      text: '리액트 수업 복습',
      checked: true
    },
    {
      id: 2,
      text: '리액트 프로젝트 기획',
      checked: false
    },
    {
      id: 3,
      text: '데이터베이스 테스트',
      checked: true
    }
  ]
  const [todos, setTodos] = useState(initVal)
  const maxid = useRef(todos.length + 1)

  // 🔥 상태변수 todos 변경
  function handleChecked(id) {
    const newtodos = todos.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setTodos(newtodos)
  }

  // todos  할 일 객체 목록 중 삭제하기 // 🔥 상태변수 todos 변경
  function handleRemove(id) {
    const newtodos = todos.filter((item) => item.id !== id)
    setTodos(newtodos)
  }

  // 🔥화살표 함수 사용해보기  //
  // todos 에 할일 객체를 추가 // 🔥 상태변수 todos 변경
  const handleInsert = (text) => {
    const todo = {
      id: maxid.current,
      text,
      checked: false
    }
    setTodos([...todos, todo])
    maxid.current += 1
  }

  return (
    <div>
      <TodoTemplate>
        {/* TodoInsert TodoList => TodoTemplate 컴포넌트의 칠드런 속성으로 사용가능 */}
        {/* 속성 이름은 개발자가 정의. 속성의 값은 정의된 것으로 해야함 */}
        <TodoInsert onInsert={handleInsert} />
        <TodoList
          todos={todos}
          onRemove={handleRemove}
          onChecked={handleChecked}
        />
      </TodoTemplate>
      {/* <div>렌더링 카운트 : {renderCount.current}</div> */}
    </div>
  )
}
//해당 함수 사용하면 색 연해졌다 진해짐