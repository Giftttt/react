import { useState } from 'react'
import '../assets/css/LightToggle.css'
import bulbON from '../assets/pic_bulbon.gif'
import bulbOFF from '../assets/pic_bulboff.gif'

function LightToggle() {
  const [isOn, setIsOn] = useState(false)

  // vite 은 이미지를 import 해야함.
  // const bulbON = '../assets/pic_bulbon.gif'
  // const bulbOFF = '../assets/pic_bulboff.gif'

  const handleToggle = () => {
    setIsOn((prev) => !prev)
  }

  return (
    <div className='container'>
      <img
        src={isOn ? bulbON : bulbOFF}
        alt={isOn ? 'ON' : 'OFF'}
        className='bulb'
        onClick={handleToggle}
      />
      <button onClick={handleToggle} style={{color : isOn ? 'red' : 'green'}}>{isOn ? 'OFF' : 'ON'}</button>
      {/* style 속성으로 OFF 빨강, ON 초록 */}
    </div>
  )
}

export default LightToggle