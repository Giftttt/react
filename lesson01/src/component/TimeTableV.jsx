// import React from 'react' 기본으로 import
// import '../css/TimeTable.css'
// day2_01: 객체 data props 연습
// {schedules} 는 {schedules : schedules} 생략된 형태의 객체
// 그리고 schedules가 참조하는 data도 객체
import '../css/TimeTable.css'
export default function TimeTableV({ schedules }) {
  return (
    <div>
      <h3>2025.07.01(day2) 시간표</h3>
      <table>
        <thead>
          <tr>
            <th className='theading'>TIME</th>
            <th className='theading'>TODO</th>
          </tr>
        </thead>
        <tbody>
          {
            // item 에 저장된 데이터 예시  {time: '09:00',todo: '수업'}
            schedules.map((item, idx) => (
              <tr key={idx}>
                <td className='tdata'>{item.time}</td>
                <td className='tdata'>{item.todo}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}