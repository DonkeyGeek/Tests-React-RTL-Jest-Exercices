function GetByDispalyValue() {
    return (
        <form>
            <label htmlFor='firstName'>Prénom</label>
            <input 
               type="text" 
               id="firstName" 
               placeholder="Indiquez votre prénom"
               value="Stan"   
               onChange={() => {}}
            />
    
            <label htmlFor='lastName'>Nom</label>
            <input 
                type="text" 
                id="lastName" 
                placeholder="Indiquez votre nom" 
                value="Smith"  
                onChange={() => {}} 
            />

            <textarea value='Bonjour à tous' readOnly />

            <input type="submit" value="Valider"/>
        </form>
    )
}
  
export default GetByDispalyValue