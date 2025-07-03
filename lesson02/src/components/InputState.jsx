import { useState } from 'react'

export default function InputState() {
  const [username, setUsername] = useState('홍길동')
  const [nickname, setNickname] = useState('GDhong')

  function handleOk() {
    alert(`${username} : ${nickname}`)
    setUsername('')
    setNickname('')
  }

  // e 변수는 : 발생한 이벤트 정보 입력값을 저장하는 변수
  function handleKeydown(e) {

    if (e.key === 'Enter') handleOk()
  }

  return (
    <div>
      <h3>input 에 state(상태) 변수 활용</h3>
      <p>input value 에 상태변수를 적용하면 onChange 이벤트 꼭 필요합니다.</p>
      <hr />
      <input
        type='text'
        placeholder='사용자 이름 입력하세요.'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        // value랑 onchange 둘 다 주석처리하면 문제 없으나 value 하나만 활성화하면 먹통 - value에 username이라는 상태변수 값을 줬으니 onchange로 setusername으로 상태변수 값을 바꿔야 되는데
        // 비활성화 돼있으니 작동을 안 하는 것
      />
      {/* e.target 은 이벤트를 일으킨 요소 */}
      <input
        type='text'
        placeholder='사용자 닉네임 입력하세요.'
        value={nickname}
        onKeyDown={handleKeydown}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button onClick={handleOk}>입력완료</button>
      <div>
        이름 : {username} , 닉네임 : {nickname}
      </div>
    </div>
  )
}