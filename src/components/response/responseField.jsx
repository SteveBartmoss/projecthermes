import './responseField.css'

export function ResponseField({objResponse,size,time,status}){
    return(
        <>
            <div className='div-container'>
                <div className='div-status-bar'>
                    <div>
                        <p>status: {status}</p>
                    </div>
                    <div>
                        <p>time: {time}</p>
                    </div>
                    <div>
                        <p>size: {size}</p>
                    </div>
                </div>
                <div className='div-response'>
                    <pre>{JSON.stringify(objResponse, null, 2)}</pre>
                </div>
            </div>
        </>
    )
}