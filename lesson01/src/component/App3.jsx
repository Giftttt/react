//Day1_05 : KPopUL component 부모 component
//              index.js에서 App의 파일 위치 수정

import KPopUL from "./KPopUL";

export default function App3() {
    const twice = ["나연","모모","다현","지효"]
  return (
    <div>
        <KPopUL members={twice} />
        <KPopUL members={["슈가","지민","제이홉","뷔"]} />
    </div>
  )
}
