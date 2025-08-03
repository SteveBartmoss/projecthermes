import './containers.css'

export function DivRow({chjldren}){
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