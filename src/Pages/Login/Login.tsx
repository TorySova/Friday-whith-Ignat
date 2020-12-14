import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginStateType } from '../../redux/loginReducer'
import { AppStoreType } from '../../redux/store'
import SuperInput from '../../SuperComponent/SuperInput/SuperInput'

export const Login = () => {

    const loading = useSelector<AppStoreType>(state => state.login.loading)
    const dispatch = useDispatch()
    return (
        <div>
            <SuperInput type={'text'}/>
            <SuperInput type={'password'}/>
            <input type="checkbox"/>
            <button>login</button>
        </div>
    )
}
