import { DivCol, DivRow } from '../components/containers/containers'
import viteLogo from '/vite.svg'

export function MainScreen() {
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
                </DivRow>
            </DivCol>
        </>
    )
}