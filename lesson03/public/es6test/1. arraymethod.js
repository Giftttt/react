console.log('출력 테스트')
// 3. reduce method : array의 each 요소값을 순서대로 실행한 수식 결과로 한 개의 값
const numebers1 = [45,4,9,16,25] // let으로 하면 내부 인자 마음대로 바꿀 수 있음
let sum = numebers1.reduce(myFunction3)

// 첫 번째 인자가 각 요소의 연산 결과를 저장하는 변수가 필요. 초기값은 0
function myFunction3(total, value){
    return total + value
}
console.log('reduce', sum.toString())

// 2. filter method
const over15 = numebers1.filter(myFunction2)
const under15 = numebers1.filter((value) => (value <= 15))

console.log('under15', under15.toString())

// filter method : return의 식이 참, 거짓 결과값
function myFunction2(value){
    return value > 15
    // 참이 되는 값만 가져가서 새로운 배열 만들기
}
console.log('over15', over15)

// 1. map method test
// map method는 새로운 array를 만듭니다.
// numebers1 array를 조작(각 요소값으로 연산 - callback 함수 return)한 결과
const numebers2 = numebers1.map(myFunction)

// value는 numebers1 배열의 각각 요소값. 요소의 값만 사용할 때 인자는 1개
function myFunction(value){
    return value*2    
}

// callback 함수를 화살표 함수로 바꾸기. 예시) 요소의 값과 인덱스를 콜백함수로 입력(인자). return시 중괄호 아니고 소괄호
const numebers3 = numebers1.map((value, idx) => (value*2 + idx))

console.log('출력 테스트', numebers2)
console.log('출력 테스트', numebers3.toString())