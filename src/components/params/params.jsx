import { useFrameContext } from "../../context/frameContext";
import './params.css'


export function Params(){

    const [params,setParams] = useFrameContext()

 return(
    <div>
        <textarea name="text-area" placeholder="Params" value={params} onChange={(event)=>setParams(event.target.value)} ></textarea>
    </div>
 )   
}