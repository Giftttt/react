import React from 'react'
import TwiceUL, { BtsUL } from './TestUL'
// export default가 아닌 것은 표현식 기호 { 함수이름 } 형태로 import


// day1_03 : TestUL.jsx의 컴포넌트 2개를 화면에 출력하기 위한 부모 component
              // ㄴ  index.js에서 App component로 동작합니다.
// component는 함수로 정의합니다. (함수형 컴포넌트)
// 파일명과 함수 이름이 동일할 필요 없습니다.
export default function App2() {
  return (
    <div>
        App2
        {/* 우리가 정의한 component 이렇게 닫음 */}
        <TwiceUL /> 
        <BtsUL />

    </div>
  );
}
