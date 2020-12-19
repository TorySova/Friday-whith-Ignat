import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {useParams} from "react-router-dom";
import {setPasswordTC} from "../../redux/setPasswordReducer";
import Preloader from "../../common/Preloader";
import SetPassword from "./SetPassword";

const SetPasswordContainer = React.memo(() => {
        const [pass, setPass] = useState<string>("");
        const [pass2, setPass2] = useState<string>("");
        const {token}: any = useParams();

        const dispatch = useDispatch();
        const setPassCallback = useCallback(
            () => dispatch(setPasswordTC(token, pass, pass2)),
            [pass, pass2, dispatch]
        );
        const {loading, error} = useSelector((store: AppStoreType) => store.setPassword);
        return (
            <>
                {loading && <Preloader/>}
                <SetPassword
                    pass={pass} setPass={setPass}
                    pass2={pass2} setPass2={setPass2}
                    setPassCallback={setPassCallback}
                    loading={loading}
                    error={error}
                />
            </>
        );
    }
);

export default SetPasswordContainer;