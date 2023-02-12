import { useState } from 'react'
const btnStyle = {
    padding: '5px',
    width: '200px',
    borderRadius: '6px',
    border: '0px'
}

function IncrementCount() {

    const [count, setCount] = useState(0)
    const [btnColor, setBtnColor] = useState('orange')

    const handleClick = () => {
        setCount(count + 1)
    }

  return (
    <>
        <h1>{count}</h1>
        <button 
           style={{...btnStyle, backgroundColor: btnColor }}
           onClick={handleClick}
        >
            Vous avez cliqué {count} fois
        </button>
    </>
  )
}

export default IncrementCount