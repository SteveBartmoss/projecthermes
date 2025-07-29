import { useState } from 'react'
import './home.css'
import viteLogo from '/vite.svg'
import { Btn } from '../components/btn/btn'
import { TextField } from '../components/textfield/textfield'
import { ResponseField } from '../components/response/responseField'

export function Home() {

    const [url,setUrl] = useState('')
    const [body,setBody] = useState('')
    const [method, setMethod]=useState('GET')
    const [response,setResponse] = useState('')
    const [status,setStatus] = useState('')
    const [duration,setDuration] = useState(0)
    const [size,setSize] = useState(0)

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
            const start = performance.now();
            const res = await fetch(url, options);
            const end = performance.now();
            setDuration(end-start)
            const data = await res.json();
            const text = JSON.stringify(data)
            setSize(new TextEncoder().encode(text).length) 

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
                    <h1>Light client</h1>
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
                    <TextField textHolder={'url'} target={url} handleTarget={(event)=>setUrl(event.target.value)} />
                </div>
                <div className='div-col'>
                    <Btn title={'Send'} handle={handleSend} />
                </div>
            </div>

            <div className='div-row'>
                <div className='div-body'>
                        <textarea className='text-area' placeholder='body' value={body} onChange={(event)=>setBody(event.target.value)} ></textarea>
                </div>
                <ResponseField objResponse={response} size={size} time={duration} status={status} />
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