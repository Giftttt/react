// 비구조화, 구조 분해
//  ㄴ array or object를 분해 - 함수 등 값을 전달할 때 사용

const sana = {name : "사나", age : 23, address : '경기'}

function print1(objValue){ // objvalue를 받아서 print함
    console.log('print1 함수 실행---')
    console.log(objValue.name)
    console.log(objValue.age)
    console.log(objValue.address)
}

function print2({age, name, addr}){ // {속성 이름1, 속성 이름2, ...} => 순서 무관. 속성 이름만 잘 맞춰주면 됨
    console.log('print2 함수 실행---')
    console.log(name)
    console.log(age)
    console.log(addr) // 없는 속성
}

function print3({address}){ // 필요한 속성만 가져오기 {address : address} 생략 형태
    console.log('print3 함수 실행---')
    console.log(address)
}


function print4({address : addr}){ // 회색으로 바뀜 - address 속성 값을 addr 변수에 저장하겠다
    console.log('print4 함수 실행---')
    console.log(addr)
    // console.log(address) // 변수 선언이 안 돼 있으므로 오류. (없는 속성은 undefined)
}

print1(sana)
print2(sana)
print3(sana)
print4(sana)

// 자식 컴포넌트에 정의한 속성들은 하나의 객체로 자식 컴포넌트에게 전달

// 2개의 속성을 kpopul이 받아서