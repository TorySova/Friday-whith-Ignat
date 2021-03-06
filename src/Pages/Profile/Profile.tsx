 import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStoreType } from '../../redux/store'



export const Profile = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const name = useSelector<AppStoreType, string>(store => store.profile.user.name)
    const id = useSelector<AppStoreType, string>(store => store.profile.user._id)
    const email = useSelector<AppStoreType, string>(store => store.profile.user.email)


    if(!isLoggedIn){
        debugger
        return <Redirect to={'/login'}/>
    }
    return (
        <div>
            Профайл
            <div>
                name: {name}
            </div>
            <div>
                id: {id}
            </div>
            <div>
                email: {email}
            </div>

        </div>
    )
}
