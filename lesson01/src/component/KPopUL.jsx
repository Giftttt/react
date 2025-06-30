//Day1_04 : 데이터를 전달 받아 component에서 사용하기


export default function KPopUL({members, title}) {
    // 객체 형식으로 저장된 스타일 값 정리
    const titlestyle = {
        color: "blue",
        border: "1px solid gray",
    }

  return (
    <div>
        {/* 부모가 주는 값을 받고있음 */}
        <h3 style={titlestyle}>{title}</h3> 
        <ul>
            {
                members.map((item,idx) => (
               <li key={idx}>{item}</li>     
            ))}
            {/* jsx는 태그안에 js코드 쓸 때 꼭 중괄호 안에 씁니다. */}
        </ul>
    </div>
  );
}

/* 위의 코드에서 함수에 입력값(인자) 있습니다. 부모 component가 주는 값임
{members} 는 {members:members} {속성이름:값변수}를 줄여서 씁니다.
배열값이 [a,b,c] 일 때 item = a, idx = 0. / 2번째 실행시 item = b, idx =1 / 3번째 item = c, idx =2

배열.map(function(item,idx){
    return 실행 내용.(실행할 코드들) 뭔가를 실행해서 return 해줌
})
    :배열의 요소를 하나씩 가져다가 값을 item, 인덱스 번호는 idx에 저장함.
    :item, idx 값으로 함수 내용을 실행한 return 겨로가로 새로운 배열이 만들어집니다.
    배열.map((item,idx) => (실행내용))
                            ㄴ return 생력하는 형식(암묵적 반환)
    */