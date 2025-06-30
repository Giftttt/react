//day1_2: component 맛보기
// component는 jsx 문법 사용하고 파일 확장자 jsx 추천
// 일반 js 파일은 js 사용
// 지금 새로 정의한 component 사용할 떄, app component에서 사용합니다 (추천 방법)
// 지금은 app.jsx 대신에 app2.jsx
export function TwiceUL() {
    return (
        <ul>
            <li>나연</li>
            <li>모모</li>
            <li>다현</li>
            <li>지효</li>
        </ul>
    )
}
export function BtsUL() {
    return (
        <ul>
            <li>슈가</li>
            <li>제이홉</li>
            <li>뷔</li>
            <li>지민</li>
        </ul>
    )
}

export default TwiceUL;
// default component는 1개민 지정