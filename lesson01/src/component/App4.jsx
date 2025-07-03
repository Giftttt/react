// 07: timetableH의 부모 component
//      자식 component timetableH 에게 2개의 배열을 전달해야 함

import TimeTableV from "./TimeTableV"
import TimeTableH_2 from "./TimeTableH_2"
import TimeTableH from "./TimeTableH"

export default function App4() {
    const time = ['09:00', '10:00', '11:00', '12:00', '13:00']
    const todo = ['기상', '운동', '독서', '점심', '공부']

    const schedule = [
  { time: '09:00', todo: '수업' },
  { time: '11:00', todo: '과제' },
  { time: '12:30', todo: '점심식사' },
  { time: '14:00', todo: '주간회의' },
  { time: '16:45', todo: '자료조사' }
]

  return (
    <div>
        <TimeTableH time={time} todo={todo} title={'첫 번째 테이블'} />
        <TimeTableH_2 time={time} todo={todo} title={'두 번째 테이블'} />
        <hr />
        {/* 객체의 배열을 자식 component에게 전달. 이 때 props 사용 */}
        <TimeTableV schedule={schedules} />
    </div>
  )
}
