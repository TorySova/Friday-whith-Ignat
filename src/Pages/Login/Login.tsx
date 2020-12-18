import React, { ChangeEvent, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginTC } from '../../redux/loginReducer'
import { AppStoreType } from '../../redux/store'
import SuperInput from '../../SuperComponent/SuperInput/SuperInput'
import s from './Login.module.css'

export const Login = () => {

    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const error = useSelector<AppStoreType, string>(state => state.login.error)
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememderMe] = useState(false)

    const setEmailCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value),
        [setEmail]
    );
    const setPassCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value),
        [setPassword]
    );
    const setRememberCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setRememderMe (e.currentTarget.checked),
        [setRememderMe ]
    );
    const loggInCallback = useCallback(() => {
        dispatch(loginTC({email, password, rememberMe}))
    }, [email, password, rememberMe, dispatch])
       
    if(isLoggedIn){
        return <Redirect to={'/profile'}/>
    }
       
    return (
        <div>
            {error ? <div className={s.error}>{error}</div> : ''}
            <p>введите почту:</p><SuperInput type={'text'} placeholder={'email'} value={email} onChange={setEmailCallback}/>
            <p>введите пароль:</p><SuperInput type={'password'} placeholder={'password'} value={password} onChange={setPassCallback}/>
            <p><input type={'checkbox'} checked={rememberMe} onChange={setRememberCallback}/> remember me</p>
            <p><button onClick={loggInCallback}>login</button></p>
        </div>
    )
}
