import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Error404 } from './Pages/404/Error404'
import { CheckIn } from './Pages/CheckIn/CheckIn'
import { Login } from './Pages/Login/Login'
import { NewPassword } from './Pages/NewPassword/NewPassword'
import { Profile } from './Pages/Profile/Profile'
import { RecoverPassword } from './Pages/RecoverPassword/RecoverPassword'
import { Test } from './Pages/Test/Test'

export const PATH = {
    CHECK_IN: "/check-in",
    LOGIN: "/login",
    NEW_PASSWORD: "/new-password",
    PROFILE: "/profile",
    RECOVER_PASSWORD: "/recover-password",
    TEST: "/test"
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.PROFILE} />} />
                <Route path={PATH.CHECK_IN} render={() => <CheckIn />} />
                <Route path={PATH.LOGIN} render={() => <Login />} />
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword />} />
                <Route path={PATH.PROFILE} render={() => <Profile />} />
                <Route path={PATH.RECOVER_PASSWORD} render={() => <RecoverPassword />} />
                <Route path={PATH.TEST} render={() => <Test />} />

                <Route render={() => <Error404 />} />
            </Switch>
        </div>
    )
}
