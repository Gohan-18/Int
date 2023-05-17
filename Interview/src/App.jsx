import { useState } from 'react'
import './App.css'

function App() {

  const [number, setNumber] = useState(1);
  let arr = []

  const addArray = () => {
    for(let i = 0; i < number; i++) {
      arr.push(i);
    }
  }
  
  addArray()
  console.log(arr)

  return (
    <>
      <div className='container' >
        <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
        <div className='box-container'>
        {arr.map((item, index) => (
        <div key={index} className='box' >
          
        </div>
      ))}
        </div>
      </div>

    </>
  )
}

export default App
