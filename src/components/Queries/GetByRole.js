function GetByRole() {
  return (
    <>
    <div>
        <h1>Adopter un Animal</h1>
        <article>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate minima delectus, deleniti aperiam repudiandae ratione nesciunt expedita rerum vero unde quae, architecto impedit? Mollitia modi illum distinctio corrupti repellendus consequatur.</p>
          <img 
            src="https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_1280.jpg"
            alt="Chien" 
            width="400"
          />
        </article>
    </div>
    <form>
      <div>
        <label htmlFor='name'>Nom</label>
        <input type="text" id="name" />
      </div>

      <div>
      <label htmlFor="pet-select">Choisissez un animal:</label>
        <select name="pets" id="pet-select" size="10">
            <option value="dog">Chien</option>
            <option value="cat">Chat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Perroquet</option>
            <option value="spider">Araignée</option>
            <option value="goldfish">Poisson rouge</option>
        </select>
      </div>

      <div>
        <label>
          <input type="checkbox" id="terms and conditions" />
          J'accepte les termes et conditions
        </label>
      </div>

      <button>Valider</button>
    </form>
    </>
  )
}

export default GetByRole