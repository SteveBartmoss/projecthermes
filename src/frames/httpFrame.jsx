import { useState } from "react";
import { DivGrow, DivRow } from "../components/containers/containers";
import { Client } from "../client/client";
import { SelectField } from "../components/select/selectField";
import { TextField } from "../components/textfield/textfield";
import { Btn } from "../components/btn/btn";
import './httpFrame.css'
import { ResponseField } from "../components/response/responseField";
import { Params } from "../components/params/params";
import { TabsRequest } from "../components/tabsRequest/tabsRequest";
import { BodyConfig } from "../components/body/bodyConfig";
import { AuthConfig } from "../components/authConfig/authConfig";
import { useFrameContext } from "../context/frameContext";
import { BodyField } from "../components/bodyFiled/bodyField";

export function HttpFrame(){

    const [url,setUrl] = useState('')
    const {body} = useFrameContext()
    const [method, setMethod] = useState('GET')
    const [objProps, setObjProps] = useState({})
    const {token} = useFrameContext()
    
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

    const elementsRequest = [
        {
            id: 1,
            title: 'Params',
            content: <Params />,
        },
        {
            id: 2,
            title: 'Authorization',
            content: <AuthConfig />,
        },
        {
            id: 3,
            title: 'Body',
            content: <BodyConfig />,
        }
    ]

    const handleSend = async() => {
        try{
            const {data,duration,size,status} = await Client.sendPeticion(method,body,url,token)
            setObjProps({
                objResponse: data,
                time: duration,
                status: status,
                size: size
            })

        } catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <DivRow>
                <div>
                    <SelectField elements={methodElements} target={method} handleChange={(event)=>setMethod(event.target.value)} />
                </div>
                <DivGrow>
                    <TextField textHolder={'url'} target={url} handleTarget={(event)=>setUrl(event.target.value)} />
                </DivGrow>
                <div>
                    <Btn title={'Send'} handle={handleSend} />
                </div>
            </DivRow>

            <DivRow>
                <TabsRequest elements={elementsRequest} />
            </DivRow>
            <DivRow>
                <div className='div-body'>
                    <BodyField />
                </div>
                <ResponseField objProps={objProps} />
            </DivRow>
        </>
    )
}