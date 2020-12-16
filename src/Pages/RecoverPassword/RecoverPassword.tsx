import React from 'react'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import ForgotContainer from "./ForgotContainer";
import s from './RecoverPassword.module.css'


export const RecoverPassword = () => {
    const success = useSelector((store: AppStoreType) => store.forgot.success);

debugger
    return (
        <div className={s.wrapper}>
            <div><h1>Восстановление пароля</h1></div>
            {success
                ? <div>click the link in the message in your email</div>
                : <ForgotContainer/>
            }
        </div>
    );
};