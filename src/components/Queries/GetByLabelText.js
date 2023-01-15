function GetByRole() {
    return (
      <form>
        <div>
          <label htmlFor='firstName'>Prénom</label>
          <input type="text" id="firstName" />
  
          <label htmlFor='lastName'>Nom</label>
          <input type="text" id="lastName" />
        </div>

        <div>
            <label id="username-label">Username</label>
            <input aria-labelledby="username-label" />
        </div>
  
        <div>
          <label>
            <input type="checkbox" id="terms and conditions" />
            J'accepte les termes et conditions
          </label>
        </div>
  
        <div>
          <label>
            <input type="checkbox" id="newsletter" />
            <span>Je m'abonne à la newsletter</span>
          </label>
        </div>

        <label>
            Animal Préféré
            <input type="text" />
        </label>
        <label>
            Animal Préféré
            <textarea />
        </label>
  
        <button>Valider</button>
      </form>
    )
  }
  
  export default GetByRole