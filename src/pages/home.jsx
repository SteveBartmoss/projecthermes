import { useState } from 'react'
import './home.css'
import viteLogo from '/vite.svg'
import { Btn } from '../components/btn/btn'
import { TextField } from '../components/textfield/textfield'
import { ResponseField } from '../components/response/responseField'
import { Client } from '../client/client'
import { SelectField } from '../components/select/selectField'
import { LongTextField } from '../components/longTextField/longTextField'

export function Home() {

    const [url,setUrl] = useState('')
    const [body,setBody] = useState('')
    const [method, setMethod]=useState('GET')
    const [objProps, setObjProps]=useState({})

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
            const {data,duration,size,status } = await Client.sendPeticion(method,body,url)
            setObjProps({
                objResponse: data,
                time: duration,
                status: status,
                size: size
            })

            /*
            const start = performance.now();
            const res = await fetch(url, options);
            const end = performance.now();
            setDuration(end-start)
            const data = await res.json();
            const text = JSON.stringify(data)
            setSize(new TextEncoder().encode(text).length) 

            setResponse(data);
            setStatus(res.status)
            */

        } catch (err) {
            console.error('Error en la petición:', err);
        }
        
    }

    return (
        <>
            <div className='div-row'>
                <div>
                    <img src={viteLogo} alt="Vite logo" />
                </div>
                <div>
                    <h1 className='title'>Light client</h1>
                </div>
            </div>

            <div className='div-row'>
                <div>
                    <SelectField elements={methodElements} target={method} handleChange={(event)=>setMethod(event.target.value)} />
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
                    <LongTextField textHolder={'body'} target={body} handleTarget={(event)=>setBody(event.target.value)} />
                </div>
                <ResponseField objProps={objProps} />
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