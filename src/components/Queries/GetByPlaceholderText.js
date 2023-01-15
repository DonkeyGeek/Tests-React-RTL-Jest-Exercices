function GetByPlaceholderText() {
    return (
      <form>
        <div>
          <label htmlFor='firstName'>Prénom</label>
          <input type="text" id="firstName" placeholder="Indiquez votre prénom"/>
  
          <label htmlFor='lastName'>Nom</label>
          <input type="text" id="lastName" placeholder="Indiquez votre nom" />
        </div>
        <button>Valider</button>
      </form>
    )
  }
  
  export default GetByPlaceholderText