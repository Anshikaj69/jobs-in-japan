import { useState } from 'react'

import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
      <Homepage></Homepage>
      </div>
    </>
  )
}

export default App
