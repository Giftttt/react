// object, array에서 사용하는 calc
// 기호는 ...로 표시

//array의 spread calc : 두 개의 배열을 합쳐서 새로운 배열 만들 때. react에서는 concat보다 이러한 연산을 선호
const kor = [90, 89, 77]
const eng = [456, 234, 11]
const scores = [...kor, ...eng]
console.log('배열 합치기 scores :', scores)

// object에 spread 연산 : 기존 object copy하여 새로운 object 생성할 때 사용. usestate 사용할 때
                         //새로운 속성값 추가 또는 기존 속성값 수정           
const people = {name: 'twice', age:28}
console.log('people', people)
// 대체로 작은 따옴표 많이 씀

// ...people 연산은 people object의 속성들을 모두 가져오기
const people2 = {...people, address: 'seoul'} // 앞의 속성 다 갖고 오고 뒤에 address추가
console.log('people2', people2)

const people3 = {...people, name : 'twice2'} // 속성 변경
console.log('people3', people3)

// people에 새로운 속성 추가하기
people.email = 'koreait@gmail.com'
// people의 기존 속성 값 변경하기. peopel.name = 'IVE' 와 같음
// 배열이나 객체가 상태변수일때 상태를 바꾸면 usestate 동작
people['name'] = 'IVE'
console.log('기존 object people', people)