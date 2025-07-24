import { useState } from 'react'
import './home.css'
import viteLogo from '/vite.svg'

export function Home() {

    const [url,setUrl] = useState('')
    const [response,setResponse] = useState('')

    const handleSend = async()=>{
        const res = await fetch(url);
        const data = await res.json()
        setResponse(data)

        console.log(response)
    }

    return (
        <>
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </div>
            <h1>Lucy</h1>
            <input className='text-field' type='text' placeholder='url' value={url} onChange={(event)=>setUrl(event.target.value)}/>
            <button onClick={handleSend}>Send</button>
            <p>
                Cliente http ligero
            </p>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <pre>{JSON.stringify(response, null, 2)}</pre>
        </>
    )
}