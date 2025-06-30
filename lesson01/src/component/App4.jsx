// 07: timetableH의 부모 component
//      자식 component timetableH 에게 2개의 배열을 전달해야 함

import TimeTableH from "./TimeTableH"

export default function App4() {
    const time = ['09:00', '10:00', '11:00', '12:00', '13:00']
    const todo = ['기상', '운동', '독서', '점심', '공부']

  return (
    <div>
        <TimeTableH time={time} todo={todo} title={'첫 번째 테이블'} />
        <TimeTableH_2 timeli={time} todoli={todo} title={'두 번째 테이블'} />
    </div>
  )
}
