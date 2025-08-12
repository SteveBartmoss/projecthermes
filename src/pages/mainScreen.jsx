import { useState } from 'react'
import { DivCol, DivGrow, DivRow } from '../components/containers/containers'
import { TabFrames } from '../components/tabFrames/tabFrames'
import viteLogo from '/vite.svg'
import { HttpFrame } from '../frames/httpFrame'
import { Btn } from '../components/btn/btn'
import { useSelector } from 'react-redux'
import './mainScreen.css'

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
                <DivRow>
                    <DivGrow>
                        <TabFrames />
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