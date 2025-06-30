// 08 : 부모 컴포넌트가 자식에게 전달하는 데이터 property 연습
                                        //  ㄴ 객체 타입 변수로 저장하기 -> 변수명 props. props는 여러 속성이 저장돼있음
// 1번은 객체를 속성별로 나눠서 {}안에 넣고 , 2번은 하나의 객체에 
// 부모 컴포넌트는 app4
import '../css/TimeTableH.css'
export default function TimeTableH(props) {
  return (
   <>
<h3 className='title'>{props.title}</h3>
     <table>
        {/* 리액트에서는 tr을 tbodym thead를 부모요소로 해야함 */}
         <tbody>
             <tr>
                 <th className='theading'>TIME</th>
                 <ul>
            {props.time.map((item,idx) => (
               <td key={idx} className='tdata'>{item}</td>     
            ))}
            {/* key = 반복시킬때 구별할 값을 줘 */}
            {/* jsx는 태그안에 js코드 쓸 때 꼭 중괄호 안에 씁니다. */}
        </ul>                 
             </tr>
    
             <tr>
                 <th className='theading'>TODO</th>
                 <ul>
            {props.todo.map((item,idx) => (
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
