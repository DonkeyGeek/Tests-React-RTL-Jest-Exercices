import { useState } from "react";

function QueryByRole() {

    const [isDark, setIsDark] = useState(false);

    return (
        <div style={{background: isDark && 'grey'}}>
            <button onClick={() => setIsDark(!isDark)}>{isDark ? 'Light' : 'Dark'}</button>

            <p className='container'>Veuillez indiquer votre identité</p>
            <form>
                <div>
                <label htmlFor='firstName'>Prénom</label>
                <input type="text" id="firstName" placeholder="Indiquez votre prénom"/>

                <label htmlFor='lastName'>Nom</label>
                <input type="text" id="lastName" placeholder="Indiquez votre nom" />
                </div>
                <input type="submit" value="Valider"/>
            </form>
      </div>
    )
  }

  export default QueryByRole
