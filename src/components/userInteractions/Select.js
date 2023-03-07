const Select = ({ options }) => {
    return (
        <select style={{marginTop: '20px'}} multiple>
            {
                options.map( option => {
                    return <option key={option} value={option}>{option}</option>
                })
            }
        </select>
    )
}

export default Select