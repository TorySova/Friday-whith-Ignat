import React from 'react'
import SuperInput from '../../SuperComponent/SuperInput/SuperInput'

export const Login = () => {
    return (
        <div>
            <SuperInput type={'text'}/>
            <SuperInput type={'password'}/>
            <input type="checkbox"/>
            <button>login</button>
        </div>
    )
}
