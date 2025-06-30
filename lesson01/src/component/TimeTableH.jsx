// 부모 컴포넌트가 자식에게 전달하는 데이터 property 연습\
// 부모 컴포넌트는 app4
import '../css/TimeTableH.css'
export default function TimeTableH({time, todo}) {
  return (
   <>
<h3 className='title'>오늘의 시간표</h3>
     <table>
        {/* 리액트에서는 tr을 tbodym thead를 부모요소로 해야함 */}
         <tbody>
             <tr>
                 <th className='theading'>TIME</th>
                 <ul>
            {
                time.map((item,idx) => (
               <td key={idx} className='tdata'>{item}</td>     
            ))}
            {/* key = 반복시킬때 구별할 값을 줘 */}
            {/* jsx는 태그안에 js코드 쓸 때 꼭 중괄호 안에 씁니다. */}
        </ul>                 
             </tr>
             <tr>
                 <th className='theading'>TODO</th>
                 <ul>
            {
                todo.map((item,idx) => (
               <td key={idx} className='tdata'>{item}</td>     
            ))}
            {/* jsx는 태그안에 js코드 쓸 때 꼭 중괄호 안에 씁니다. */}
        </ul>
             </tr>
         </tbody>
     </table>
   </>
  )
}
