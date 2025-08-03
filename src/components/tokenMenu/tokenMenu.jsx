import { useState } from 'react'
import './tokenMenu.css'

export function TokenMenu({title,target,handleTarget}){

    const [open,setOpen]=useState(false)

    const handleOpen=()=>{
        setOpen(true)
    }

    const handeClose=()=>{
        setOpen(false)
    }

    return(
        <div className='display-menu' onClick={handleOpen}>

            <div>{title}</div>
            <div onMouseLeave={handeClose} className={open ? 'display-menu-div' : 'display-menu-none'}>
                <label>Token</label> <input type="text" className='text-field' value={target} onChange={handleTarget} />
            </div>
        </div>
    )
}