import React from 'react'
import { useSelector } from 'react-redux'
import { AppStoreType } from '../../redux/store'



export const Profile = () => {

    const name = useSelector<AppStoreType, string>(store => store.profile.user.name)
    return (
        <div>
            Профайл
            <div>
                name: {name}
            </div>
            
        </div>
    )
}
