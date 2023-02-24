import { useState } from 'react';
const btnStyle = {
    padding: '5px',
    width: '200px',
    borderRadius: '6px',
    border: '0px'
}

function IncrementCount() {

    const [count, setCount] = useState(0)
    const [btnColor, setBtnColor] = useState('orange')
    const [isChecked, setIsChecked] = useState(false)
    const [showPopup, setShowPopup] = useState(false)

    const handleMouseOver = () => setShowPopup(true)
    const handleMouseOut = () => setShowPopup(false)

    const color = btnColor === 'orange' ? 'cyan' : 'orange';

    const handleClick = () => {
        setCount(count + 1)
        setBtnColor(color)
    }

  return (
    <>
        <h1>{count}</h1>
        <div>
            <input 
                id="accept-terms"
                type="checkbox" 
                checked={isChecked} 
                onChange={ e => setIsChecked(e.target.checked)}
            />
            <label 
                htmlFor='accept-terms'>{" "}J'accepte 
                <span
                    style={{color: 'blue'}}
                    onMouseOver={ handleMouseOver }
                    onMouseOut={ handleMouseOut }
                > les termes et conditions
                </span>
            </label>
        </div>

        <button 
           style={{...btnStyle, backgroundColor: btnColor }}
           onClick={handleClick}
           disabled={!isChecked}
        >
            Vous avez cliqué {count} fois
        </button>

        {
            showPopup && (
                <div className='popup'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet cum aliquam, nam libero quo ullam inventore perspiciatis velit voluptatibus quos excepturi! Cumque totam maxime dolor expedita quia aspernatur voluptatum nulla!</p>
                </div>
            )
        }
    </>
  )
}

export default IncrementCount