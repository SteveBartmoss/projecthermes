import { useFrameContext } from "../../context/frameContext";
import './bodyConfig.css'

export function BodyConfig(){

    const {typeBody,setTypeBody} = useFrameContext()
    
    return(
        <div>
            <div>
                <select className='select-method' value={typeBody} onChange={(event)=>setTypeBody(event.target.value)}>
                    <option value="body" >Body</option>
                    <option value="formdata">Form-Data</option>
                </select>
            </div>
        </div>
    )
}