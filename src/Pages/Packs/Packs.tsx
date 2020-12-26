import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Table } from "../../common/Table/Table";
import {AppStoreType} from "../../redux/store";
import {createPackThunk, deletePackThunk, getPacksThunk, packIdAC, updatePackThunk} from "../../redux/packsReducer";
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes";

export const Packs = () => {

    const dispatch = useDispatch();

    const getPacksData = (state: AppStoreType) => {
        return state.packs.cardPacks.map((pack: any) => ({
            id: pack._id,
            name: pack.name,
            cardsCount: pack.cardsCount,
            updated: pack.updated,
            userName: pack.user_name,
        }))
    }

    const packsData = useSelector((state: AppStoreType) => getPacksData(state));
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn);

    const isLinkToCards = true;

    const getAllPacks = () => {
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
    }

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div>
            {/* сделать дизейбл кнопок */}
            <button onClick={() => alert('Get My Packs (not working yet)')}>Get My Packs (not working yet)</button>
            <button onClick={getAllPacks}>Get All Packs</button>
            <button onClick={addNewPack}>Add Pack</button>
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