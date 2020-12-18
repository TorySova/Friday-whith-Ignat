import React from "react";
import SuperInput from "../../SuperComponent/SuperInput/SuperInput";
import s from './Forgot.module.css'

type ForgotPropsType = {
    email: string
    setEmail: (email: string) => void
    forgot: () => void
    loading: boolean
    error: string
};

const Forgot: React.FC<ForgotPropsType> = React.memo(({email, setEmail, forgot, loading, error}) => {
    return (
        <>
            {error && <div className={s.error}>{error}</div>}
            <div><SuperInput  value={email} onChangeText={setEmail} type={"email"}/></div>
            <div><button onClick={forgot} disabled={loading}>Отправить</button></div>
        </>
    );
});

export default Forgot;