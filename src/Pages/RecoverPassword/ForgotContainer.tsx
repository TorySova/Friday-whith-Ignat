import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {forgotTC} from "../../redux/forgotReducer";
import Forgot from "./Forgot";
import Preloader from "../../common/Preloader";

const ForgotContainer = React.memo(() => {
    const [email, setEmail] = useState<string>("");
    const error = useSelector((store: AppStoreType) => store.forgot.error);
    debugger
    const dispatch = useDispatch();
    const forgotCallback = useCallback(
        () => dispatch(forgotTC(email)),
        [email, dispatch]
    );
    const loading = useSelector((store: AppStoreType) => store.forgot.loading)
    return (
        <>
        {loading && <Preloader/>}
        <Forgot
            email={email} setEmail={setEmail}
            forgot={forgotCallback}
            loading={loading}
            error={error}
        />
        </>
    );
});

export default ForgotContainer;