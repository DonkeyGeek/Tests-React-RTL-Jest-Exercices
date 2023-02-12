import { useState } from 'react'

function IncrementCount() {

    const [count, setCount] = useState(0)

  return (
    <>
        <h1>{count}</h1>
        <button>Vous avez cliqué {count} fois</button>
    </>
  )
}

export default IncrementCount