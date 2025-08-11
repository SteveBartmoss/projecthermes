import { useEffect, useState } from "react"

import './tabFrames.css'
import { HttpFrame } from "../../frames/httpFrame"

export function TabFrames({elements}){

    const [currentTab,setCurrentTab] = useState(0)

    const handleChangeTab=(element)=>{
        setCurrentTab(element.id)
    }

    useEffect(() => {
        if (elements.length > 0) {
            setCurrentTab(elements[0].id)
        }
    }, [ ])

    return(
        <div>
            <div className="container-head">
                {
                    elements.map(element => 
                        <div key={element.id}>
                            <p className={currentTab === element.id ? 'tab tab-actibe' : 'tab'} onClick={()=>handleChangeTab(element)}>{element.title}</p>
                        </div>
                    )
                }
            </div>
            <div>
                {
                    elements.map(element =>
                        <div key={element.id} className={currentTab === element.id ? '' : 'tab-close'}>
                            <HttpFrame />
                        </div>
                    )
                }
            </div>
        </div>
    )
}