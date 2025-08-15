import { useFrameContext } from '../../context/frameContext'
import './authConfig.css'

export function AuthConfig(){

    const [typeToken,setTypeToken] = useFrameContext()
    const [token,setToken] = useFrameContext()

    return(
        <div>
            <div>
                 <select className='select-method' value={typeToken} onChange={(event)=>setTypeToken(event.target.value)}>
                    <option>Bearer Token</option>
                </select>
            </div>
           <div>
                <input type="text" className='text-field' placeholder='Token' value={token} onChange={(event)=>setToken(event.target.value)} />
           </div>
        </div>
    )
}