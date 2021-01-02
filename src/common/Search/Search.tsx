import {ChangeEvent} from "react";
import SuperButton from "../../SuperComponent/SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import Sort from "./Sort";
import {searchAC} from "../../redux/searchReducer";
import CardsSearchCountDoubleRange from "./CardsSearchCountDoubleRange";
import SuperInput from "../../SuperComponent/SuperInput/SuperInput";

const Search = () => {

    const dispatch = useDispatch()

    const onSearch = () => {
        //  dispatch(getPacksTC())
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(searchAC(e.currentTarget.value))
    }

    return (
        <div>
            <div>
                <div>
                    <SuperInput onChange={onChange} placeholder={'Search cards pack name...'}/>
                    <SuperButton onClick={onSearch}>Search</SuperButton>
                </div>

                <div>
                    <CardsSearchCountDoubleRange />
                </div>

                <div>
                    <SuperButton onClick={onSearch}>Search</SuperButton>
                </div>
            </div>

            <Sort/>

        </div>
    )
}

export default Search;