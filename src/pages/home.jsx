import { useState } from 'react'
import './home.css'
import viteLogo from '/vite.svg'

export function Home() {

    const [url,setUrl] = useState('')
    const [method, setMethod]=useState('GET')
    const [response,setResponse] = useState('')

    const handleSend = async()=>{

        const options = {
            method: method, // viene de tu select: GET, POST, etc.
            headers: {
                'Content-Type': 'application/json',
            },
        }

        // Si es GET o DELETE, no envíes body
        if (method !== 'GET' && method !== 'DELETE') {
            options.body = JSON.stringify({ nombre: 'Ejemplo', valor: 123 });
        }

         try {
            const res = await fetch(url, options);
            const data = await res.json();
            setResponse(data);
            console.log(response)
        } catch (err) {
            console.error('Error en la petición:', err);
        }
        
    }

    return (
        <>
            <div className='div-row'>
                <div>
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </div>
                <div>
                    <h1>Lucy</h1>
                </div>
            </div>

            <div className='div-row'>
                <div>
                     <select className='select-method' id="metodo" value={method} onChange={(event)=>setMethod(event.target.value)}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="PATCH">PATCH</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                </div>
                <div className='div-col'>
                    <input className='text-field' type='text' placeholder='url' value={url} onChange={(event)=>setUrl(event.target.value)}/>
                </div>
                <div className='div-col'>
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>
            
            <div className='div-response'>
                <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
            
            <p>
                Cliente http ligero
            </p>
            <p className="read-the-docs">
                Descubre mas sobre el proyecto aqui
            </p>
            
        </>
    )
}