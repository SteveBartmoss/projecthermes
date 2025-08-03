import { useState } from 'react'
import { DivCol, DivGrow, DivRow } from '../components/containers/containers'
import { TabFrames } from '../components/tabFrames/tabFrames'
import viteLogo from '/vite.svg'
import { HttpFrame } from '../frames/httpFrame'
import { Btn } from '../components/btn/btn'

export function MainScreen() {

    const [count,setCount] = useState(1)
    const [frames,setFrames] = useState([
        {
            id: count,
            title: `http${count}`,
            content: <HttpFrame />
        }
    ])

    const handleAddTab=()=>{
        const newCount = count+1
        setCount(newCount)
        setFrames([...frames,{id: newCount, title: `http${newCount}`, content: <HttpFrame /> }])
    }

    return (
        <>
            <DivCol>
                <DivRow>
                    <div>
                        <img src={viteLogo} alt="Vite logo" />
                    </div>
                    <div>
                        <h1 className='title'>Light client</h1>
                    </div>
                    <div>
                        <Btn title={'new tab'} handle={handleAddTab} />
                    </div>
                </DivRow>
                <DivRow>
                    <DivGrow>
                        <TabFrames elements={frames} />
                    </DivGrow>
                </DivRow>
                <DivRow>
                    <p>
                        Cliente http ligero
                    </p>
                    <p className="read-the-docs">
                        Descubre mas sobre el proyecto aqui
                    </p>
                </DivRow>
            </DivCol>
        </>
    )
}