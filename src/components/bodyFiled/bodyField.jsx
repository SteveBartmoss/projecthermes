import { useFrameContext } from '../../context/frameContext'
import './bodyField.css'

export function BodyField(){

    const {body,setBody} = useFrameContext()

    return(
        <>
            <textarea className='text-area' placeholder='body' value={body} onChange={(event)=>setBody(event.target.value)}></textarea>
        </>
    )
}