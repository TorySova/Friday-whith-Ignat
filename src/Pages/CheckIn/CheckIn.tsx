import React from 'react'
import { useDispatch } from 'react-redux';
import SuperInput from "../../SuperComponent/SuperInput/SuperInput";


export const CheckIn = () => {


    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const dispatch = useDispatch();

    const addNewUser = () => {
        if (password === confirmPassword) {
            //вставить крутилку ?
            setMail("");
            setPassword("");
            setConfirmPassword("");
            //убрать крутилку ?
        } else {

        }

    }

    return (
        <div>
            <div>
                <p>введите почту:</p><SuperInput type={"text"} placeholder={"e-mail"} value={mail} onChangeText={setMail}/>
            </div>
            <div>
                <p>введите пароль:</p><SuperInput type={"password"} placeholder={"password"} value={password} onChangeText={setPassword}/>
            </div>
            <div>
                <p>подтвердите пароль:</p><SuperInput type={"password"} placeholder={"confirm the password"} value={confirmPassword} onChangeText={setConfirmPassword}/>
            </div>
            {/*<SuperButton/>*/}
            <button onClick={addNewUser}>Зарегистрироваться</button>
        </div>
    )
}
