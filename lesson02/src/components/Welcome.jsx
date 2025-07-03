//day2_01 : event, useState 연습

import { useState } from "react"

export default function Welcome() {
    //호출 시 배열을 반환: [현재 상태 값, 상태를 변경하는 함수]
    //  ㄴ message 변수는 값을 변경하기 위해 '반드시' setMessage method 사용해야 함
    //      ㄴ useState로 선언된 변수는 상태변수 : getElementByid('').textContent='값' 코드의 비효율성 개선. 특정한 값을 요소요소마다 해주지 않고 한꺼번에 해줌
    const [message, setMessage] = useState("Welcome!!") // [값, 바꿔주는 함수] 
    const [h3color, setH3Color] = useState('green')
    // const [mycolor, setMyColor] = useState('black')

  function handleWelcome() {
    setMessage('환영합니다.')
    // message 변수값 변경
    setH3Color('blue')
  }  

  function handleEnter() {
    setMessage('입장합니다.')
    setH3Color('orange')
  }  

  function handleOut() {
    setMessage('퇴장합니다.')
    setH3Color('pink')
  }  

    const h3Style = {
        color : h3color
    }

    // const myStyle = {
    //     color : h3color
    // }

  return (
    <div>
        {/* onClick : 해당 이벤트핸들러 함수를 지정 */}
        <button onClick={handleWelcome}>환영합니다</button>
        <button onClick={handleEnter}>입장</button>
        <button onClick={handleOut}>퇴장</button>
        <h2>{message}</h2>
        <h3 style={h3Styles}>{message}</h3>
        <h4 style={{color : h3color}}>{message}</h4>
    </div>
  )
}
