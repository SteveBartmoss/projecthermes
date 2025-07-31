import './selectField.css'

export function SelectField({elements,target,handleChange}){
    return(
        <select className='select-method' value={target} onChange={handleChange}>
            {
                elements.map(item => 
                    <option key={item.value} value={item.value}>{item.title}</option>
                )
            }
        </select>
    )
}