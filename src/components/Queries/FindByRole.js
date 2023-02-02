import { useEffect, useState } from "react";

function FindByRole() {

    const [isDark, setIsDark] = useState(false);
    const [isAvailable, setIsAvailable] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsDark(true)
            setIsAvailable(false)
        }, 2000);
    }, []);

    return (
        <div style={{background: isDark && 'grey'}}>
            <button onClick={() => setIsDark(!isDark)}>{isDark ? 'Light' : 'Dark'}</button>

            <div>
                { isAvailable && <img 
                    src="https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_1280.jpg"
                    alt="Chien" 
                    width="400"
                    />
                }
            </div>

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

  export default FindByRole
