import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SuperInput from "../../SuperComponent/SuperInput/SuperInput";
import {AppStoreType} from "../../redux/store";
import { Redirect } from 'react-router-dom';
import {registerNewUserTC} from "../../redux/registerReducer";


export const CheckIn = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const dispatch = useDispatch();

    const isRegisteredValue = useSelector<AppStoreType, boolean>(state => state.register.isRegistered)

    const addNewUser = () => {
        if (password === confirmPassword) {
            dispatch(registerNewUserTC({email, password}));
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } else {
            alert("Пароли не совпадают!")
        }

    }

    if (isRegisteredValue) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <div>
                <p>введите почту:</p><SuperInput type={"text"} placeholder={"e-mail"} value={email} onChangeText={setEmail}/>
            </div>
            <div>
                <p>введите пароль:</p><SuperInput type={"password"} placeholder={"password"} value={password} onChangeText={setPassword}/>
            </div>
            <div>
                <p>подтвердите пароль:</p><SuperInput type={"password"} placeholder={"confirm the password"} value={confirmPassword} onChangeText={setConfirmPassword}/>
            </div>
            <button onClick={addNewUser}>Зарегистрироваться</button>
        </div>
    )
}
