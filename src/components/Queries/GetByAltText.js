import btnImg from '../../images/green-button.png'
function GetByAltText() {
    return (
        <>
         <img 
            src="https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_1280.jpg"
            alt="Chien" 
            width="400"
          />
        <form>
            <div>
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
            </div>
            <div>
               <input type="image" alt="Valider" src={btnImg} width="40"/>
            </div>
        </form>
        </>
    )
}
  
export default GetByAltText