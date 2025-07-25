import { useState } from 'react'
import './home.css'
import viteLogo from '/vite.svg'

export function Home() {

    const [url,setUrl] = useState('')
    const [body,setBody] = useState('')
    const [method, setMethod]=useState('GET')
    const [response,setResponse] = useState('')
    const [status,setStatus] = useState('')

    const handleSend = async()=>{

        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        }

        if (method !== 'GET' && method !== 'DELETE') {
            options.body = JSON.stringify(JSON.parse(body));
        }

         try {
            const res = await fetch(url, options);
            const data = await res.json();
            setResponse(data);
            setStatus(res.status)
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
                <div>
                    <p>status:{status}</p>
                </div>
            </div>

            <div className='div-row'>
                <div className='div-body'>
                        <textarea className='text-area' placeholder='body' value={body} onChange={(event)=>setBody(event.target.value)} ></textarea>
                </div>
                <div className='div-response'>
                        <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
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