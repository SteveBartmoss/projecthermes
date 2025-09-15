import { useState } from "react";
import { DivGrow, DivRow } from "../components/containers/containers";
import { Client } from "../client/client";
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
import { SelectMethod } from "../components/selectMethod/selectMethod";
import { Neofetch } from "../neofetch/neofetch";

export function HttpFrame(){

    const {url,setUrl} = useFrameContext()
    const {body} = useFrameContext()
    const {method} = useFrameContext()
    const [objProps, setObjProps] = useState({})
    const {token} = useFrameContext()
    const {params} = useFrameContext()

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

            let options = {
                headers: {
                    'Authorization': `Bearer ${token}`

                },
                params: !params ? []:params,
                body: body,
            }

            let response = null

            switch(method){

                case "GET":
                    response = Neofetch.get(url,options) 
                    break
                
                case "POST":
                    response = Neofetch.post(url,options)
                    break
                
                case "PUT":
                    response = Neofetch.put(url,options)
                    break

                case "PATCH":
                    response = Neofetch.patch(url,options)
                    break

                case "DELETE":
                    response = Neofetch.delete(url,options)
                    break
                
            }

            console.log(response)
            
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
                    <SelectMethod />
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