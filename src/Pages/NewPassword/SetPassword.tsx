import React from "react";
import SuperInput from "../../SuperComponent/SuperInput/SuperInput";
import s from "../RecoverPassword/Forgot.module.css";


type SetPassPropsType = {
    pass: string
    setPass: (pass: string) => void
    pass2: string
    setPass2: (pass2: string) => void
    setPassCallback: () => void
    loading: boolean
    error: string
};

const SetPassword: React.FC<SetPassPropsType> = React.memo((
    {pass, setPass, pass2, setPass2, setPassCallback, loading, error}) => {
    return (
        <>
            {error && <div className={s.error}>{error}</div>}
            <div><SuperInput value={pass} onChangeText={setPass}/></div>
            <div><SuperInput value={pass2} onChangeText={setPass2}/></div>
            <div><button onClick={setPassCallback} disabled={loading}>Установить пароль</button></div>
        </>
    );
});

export default SetPassword;