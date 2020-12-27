import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Table } from "../../common/Table/Table";
import {AppStoreType} from "../../redux/store";
import {createPackThunk, deletePackThunk, getPacksThunk, packIdAC, setUserId, updatePackThunk} from "../../redux/packsReducer";
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes";
import { getCardsThunk } from "../../redux/cardsReducer";

export const Packs = () => {

    const packs = (state: AppStoreType) => {
        return state.packs.cardPacks.map((pack: any) => ({
            id: pack._id,
            name: pack.name,
            cardsCount: pack.cardsCount,
            updated: pack.updated,
            author: pack.user_name,
        }))
    }

    const packsData = useSelector((state: AppStoreType) => packs(state));
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn);
    const userId = useSelector<AppStoreType, string>(store => store.profile.user._id)
    const isLinkToCards = true;
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setUserId(null))
        dispatch(getPacksThunk())
    }, [])

    const getMyPacks = () => {
        dispatch(setUserId(userId))
        dispatch(getPacksThunk())
    }
    const getAllPacks = () => {
        dispatch(setUserId(null))
        dispatch(getPacksThunk())
    }
    const addNewPack = () => {
        dispatch(createPackThunk())
    }
    const updatePack = (id: string) => {
        dispatch(updatePackThunk(id))
    }
    const deletePack = (id: string) => {
        dispatch(deletePackThunk(id))
    }
    const linkToCards = (packId: string) => {
        dispatch(packIdAC(packId))
        dispatch(getCardsThunk())
    }
    
    if (!isLoggedIn) return <Redirect to={PATH.LOGIN}/>

    return (
        <div>
            {/* сделать дизейбл кнопок */}
            <button onClick={getAllPacks}>GET ALL PACKS</button>
            <button onClick={getMyPacks}>GET MY PACKS</button>
            <button onClick={addNewPack}>CREATE NEW PACK</button>
            <Table
                header={packsData[0]}
                data={packsData}
                update={updatePack}
                delete={deletePack}
                isLinkToCards={isLinkToCards}
                link={linkToCards}
            />
        </div>
    )
}