import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SuperInput from "../../SuperComponent/SuperInput/SuperInput";
import {AppStoreType} from "../../redux/store";
import { Redirect } from 'react-router-dom';
import {registerNewUserTC} from "../../redux/registerReducer";
import {PATH} from "../../Routes";


export const CheckIn = () => {

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [confirmPassword, setConfirmPassword] = React.useState<string>("");

    const dispatch = useDispatch();

    const isRegistered = useSelector<AppStoreType, boolean>(state => state.register.isRegistered);

    const addNewUser = () => {
        if (password.length < 7) {
            alert("Длина пароля должна быть 7 или более символов!");
        } else if (password !== confirmPassword) {
            alert("Пароли не совпадают!");
        } else {
            dispatch(registerNewUserTC({email, password}));
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    }

    if (isRegistered) {
        return <Redirect to={PATH.LOGIN}/>
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
