import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "../../common/Table/Table";
import {AppStoreType} from "../../redux/store";
import {
    createPackThunk,
    deletePackThunk,
    getPacksThunk,
    packIdAC,
    setCurrentPageAC,
    setUserId,
    updatePackThunk
} from "../../redux/packsReducer";
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes";
import {getCardsThunk} from "../../redux/cardsReducer";
import {Pagination} from "@material-ui/lab";
import {searchAC} from "../../redux/searchReducer";
import SuperInput from "../../SuperComponent/SuperInput/SuperInput";
import CardsSearchCountDoubleRange from "../../common/Search/CardsSearchCountDoubleRange";

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
    const isRequest = useSelector<AppStoreType, boolean>(state => state.packs.isRequest);
    const userId = useSelector<AppStoreType, string>(store => store.profile.user._id)
    const isLinkToCards = true;
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setUserId(null))
        dispatch(getPacksThunk())
    }, [dispatch])

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
    //Pagination
    const page = useSelector((state: AppStoreType) => state.packs.currentPage);
    const totalCount = useSelector((state: AppStoreType) => state.packs.totalCount);
    const rowsPerPage = useSelector((state: AppStoreType) => state.packs.pageCount);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPageAC(value))
        dispatch(getPacksThunk())
    };
    //Search
    const onChangeSearch = (text: string) => {
        dispatch(searchAC(text))
    }
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange && onChange(e)
        onChangeSearch && onChangeSearch(e.currentTarget.value)
    }
    const onSearch = () => {
        dispatch(getPacksThunk())
    }

    if (!isLoggedIn) return <Redirect to={PATH.LOGIN}/>

    return (
        <div>
            <CardsSearchCountDoubleRange/>
            <div>
                <SuperInput onChange={onChangeCallback} placeholder={'Search cards pack name...'}/>
                <button onClick={onSearch}>Search</button>
            </div>
            {/* сделать дизейбл кнопок */}
            <button onClick={getAllPacks} disabled={isRequest} >GET ALL PACKS</button>
            <button onClick={getMyPacks} disabled={isRequest} >GET MY PACKS</button>
            <button onClick={addNewPack} disabled={isRequest} >CREATE NEW PACK</button>
            <Table
                header={packsData[0]}
                data={packsData}
                update={updatePack}
                delete={deletePack}
                isLinkToCards={isLinkToCards}
                link={linkToCards}
            />
            <div>
                <Pagination count={Math.ceil(totalCount / rowsPerPage)}
                            defaultPage={page}
                            boundaryCount={2}
                            onChange={handleChange}
                            showFirstButton={page !== 1}
                            showLastButton/>
            </div>
        </div>
    )
}