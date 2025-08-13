import { useState } from 'react'
import './tabsRequest.css'

export function TabsRequest({elements}){

    const [currentTab,setCurrentTab] = useState(1)
    
    const handleChangeTab=(element)=>{
        setCurrentTab(element.id)
    }

    return(
        <div>
            <div className="container-head">
                {
                    elements.map(element => 
                        <div className="div-tabs" key={element.id}>
                            <p className={currentTab === element.id ? 'tab tab-actibe' : 'tab'} onClick={()=>handleChangeTab(element)}>{element.title}</p>
                        </div>
                    )
                }
            </div>
            <div>
                {
                    elements.map(element => 
                        <div key={element.id} className={currentTab === element.id ? '' : 'tab-close'}>
                            {element.content}
                        </div>
                    )
                }
            </div>
        </div>
    )
}