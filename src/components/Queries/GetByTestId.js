import CustomButton from "../CustomElements/CustomButton"

function GetByTestId() {
    return (
        <>
           <CustomButton text="Cliquez ici" />
           <div data-testid="div-element">Element</div>
        </>
    )
}
  
export default GetByTestId