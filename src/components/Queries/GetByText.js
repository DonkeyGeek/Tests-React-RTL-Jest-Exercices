function GetByText() {
    return (
        <>
        <input type="button" value="Changer la couleur" />
        <p>Veuillez indiquer votre identité</p>
        <form>
            <div>
            <label htmlFor='firstName'>Prénom</label>
            <input type="text" id="firstName" placeholder="Indiquez votre prénom"/>
    
            <label htmlFor='lastName'>Nom</label>
            <input type="text" id="lastName" placeholder="Indiquez votre nom" />
            </div>
            <input type="submit" value="Valider"/>
        </form>
      </>
    )
  }
  
  export default GetByText