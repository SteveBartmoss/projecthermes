import './responseField.css'
import copy from '/copy.png'

export function ResponseField({objProps}){

    const handleClipBoard = async () =>{
        try{

            await navigator.clipboard.writeText(JSON.stringify(objProps.objResponse))

        }catch(error){
            console.log(error)
        }
    }
    return(
        <>
            <div className='div-container'>
                <div className='div-status-bar'>
                    <div>
                        <p>status: {objProps.status}</p>
                    </div>
                    <div>
                        <p>time: {objProps.time}</p>
                    </div>
                    <div>
                        <p>size: {objProps.size} B</p>
                    </div>
                    <div className='div-btn-icon'>
                        <img onClick={handleClipBoard} src={copy} alt='copy' />
                    </div>
                </div>
                <div className='div-response'>
                    <pre>{JSON.stringify(objProps.objResponse, null, 2)}</pre>
                </div>
            </div>
        </>
    )
}