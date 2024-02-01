import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("olive")
  // const changeColor = (newColor) => {
  //   setColor(newColor)
  

  // }


  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 '>

          <button onClick={()=>setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{ backgroundColor: "red" }}
          >Red</button>

          <button onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{ backgroundColor: "green" }}
          >green</button>

          <button onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{ backgroundColor: "blue" }}
          >blue</button>

          <button onClick={() => setColor("black")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg  '
            style={{ backgroundColor: "black" }}
          >black</button>

          <button onClick={() => setColor("white")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
            style={{ backgroundColor: "white" }}
          >white</button>

          <button onClick={() => setColor("yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
            style={{ backgroundColor: "yellow" }}
          >yellow</button>
        </div>

      </div>
    </div>
  )
}

export default App
