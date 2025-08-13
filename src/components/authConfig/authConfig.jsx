import './authConfig.css'

export function AuthConfig({type,setType,token,handleToken}){

    return(
        <div>
            <div>
                 <select>
                    <option>Bearer Token</option>
                </select>
            </div>
           <div>
                <input type="text" placeholder='Token' value={token} onChange={handleToken} />
           </div>
        </div>
    )
}