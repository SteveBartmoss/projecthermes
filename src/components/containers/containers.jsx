import './containers.css'

export function DivRow({children}){
    return(
        <div className="div-row">
            {children}
        </div>
    )
}

export function DivCol({children}){
    return(
        <div className="div-column">
            {children}
        </div>
    )
}

export function DivGrow({children}){
    return(
        <div className='div-grow'>
            {children}
        </div>
    )
}