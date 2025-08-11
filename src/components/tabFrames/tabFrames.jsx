import { useEffect, useState } from "react"
import addImg from '/add.png'

import './tabFrames.css'
import { HttpFrame } from "../../frames/httpFrame"
import { useDispatch, useSelector } from "react-redux"
import { addTab } from "../../store/tabSlice"

export function TabFrames({elements}){

    const listFrames = useSelector(state => state.tabs)
    const dispach = useDispatch()
    const [currentTab,setCurrentTab] = useState(1)

    const handleChangeTab=(element)=>{
        setCurrentTab(element.id)
    }

    const handleAddTab=()=>{
        let counter = listFrames[listFrames.length-1].id
        dispach(addTab({
            id: counter+1,
            title: `http${counter+1}`
        }))
    }

    useEffect(() => {
        setCurrentTab(listFrames[0].id)
    }, [ ])

    return(
        <div>
            <div className="container-head">
                {
                    listFrames.map(element => 
                        <div key={element.id}>
                            <p className={currentTab === element.id ? 'tab tab-actibe' : 'tab'} onClick={()=>handleChangeTab(element)}>{element.title}</p>
                        </div>
                    )
                }
                <div>
                    <img onClick={handleAddTab} className="tab" src={addImg} alt="add" />
                </div>
            </div>
            <div>
                {
                    listFrames.map(element =>
                        <div key={element.id} className={currentTab === element.id ? '' : 'tab-close'}>
                            <HttpFrame />
                        </div>
                    )
                }
            </div>
        </div>
    )
}