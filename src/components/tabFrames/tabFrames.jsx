import { useEffect, useState } from "react"
import addImg from '/add.png'
import close from '/close.png'

import './tabFrames.css'
import { HttpFrame } from "../../frames/httpFrame"
import { useDispatch, useSelector } from "react-redux"
import { addTab, removeTab } from "../../store/tabSlice"
import { FrameContextProvider } from "../../context/frameContext"

export function TabFrames(){

    const listFrames = useSelector(state => state.tabs)
    const dispach = useDispatch()
    const [currentTab,setCurrentTab] = useState(1)

    const handleChangeTab=(element)=>{
        setCurrentTab(element.id)
    }

    const handleAddTab=()=>{
        if(listFrames.length<=0){
            dispach(addTab({
                id: 1,
                title: `http${1}`
            }))
            return
        }
        let counter = listFrames[listFrames.length-1].id
        dispach(addTab({
            id: counter+1,
            title: `http${counter+1}`
        }))
    }

    const handleRemoveTab=(id)=>{
        dispach(removeTab(id))
    }

    useEffect(() => {
        setCurrentTab(listFrames[0].id)
    }, [ ])

    return(
        <div>
            <div className="container-head">
                {
                    listFrames.map(element => 
                        <div className="div-tabs" key={element.id}>
                            <p className={currentTab === element.id ? 'tab tab-actibe' : 'tab'} onClick={()=>handleChangeTab(element)}>{element.title}</p>
                            <img onClick={()=>handleRemoveTab(element.id)} className="img-close" src={close} alt="close" />
                        </div>
                    )
                }
                <div className="div-btn-icon">
                    <img onClick={handleAddTab} src={addImg} alt="add" />
                </div>
            </div>
            <div>
                {
                    listFrames.map(element =>
                        <div key={element.id} className={currentTab === element.id ? '' : 'tab-close'}>
                            <FrameContextProvider>
                                <HttpFrame />
                            </FrameContextProvider>
                        </div>
                    )
                }
            </div>
        </div>
    )
}