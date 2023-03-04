import { useState } from 'react';

const TypeClear = () => {

    const [text, setText] = useState('Bonjour');

    return (
        <div>
            <input 
               type="text"
               value={text}
               onChange={ e => setText(e.target.value)}
            />
        </div>
    )
}

export default TypeClear