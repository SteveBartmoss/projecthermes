import './longTextField.css'

export function LongTextField({textHolder, target, handleTarget}){
    return(
        <>
            <textarea className='text-area' placeholder={textHolder} value={target} onChange={handleTarget}></textarea>
        </>
    )
}