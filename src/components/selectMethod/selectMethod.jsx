import { useFrameContext } from '../../context/frameContext'
import './selectMethod.css'

export function SelectMethod(){
    
    const {method,setMethod} = useFrameContext()

    const methodElements = [
        {
            value: "GET",
            title: "GET"
        },
        {
            value: "POST",
            title: "POST"
        },
        {
            value: "PUT", 
            title: "PUT"
        },
        {
            value: "PATCH",
            title: "PATCH"
        },
        {
            value: "DELETE",
            title: "DELETE"
        }
    ]

    return(
        <select className='select-method' value={method} onChange={(event)=>setMethod(event.target.value)}>
            {
                methodElements.map(item => 
                    <option key={item.value} value={item.value}>{item.title}</option>
                )
            }
        </select>
    )
}