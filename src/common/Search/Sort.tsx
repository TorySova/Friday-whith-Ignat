import SuperButton from "../../SuperComponent/SuperButton/SuperButton";
import {sortAC} from "../../redux/searchReducer";
import {useDispatch} from "react-redux";
import {useState} from "react";

const Sort = () => {
    // const [nameSort, setNameSort] = useState<any>(1)
    // const [sort, setSort] = useState(-1)
    const dispatch = useDispatch()

    const onSort = (s: number) => {
        // setSort(s)
        dispatch(sortAC(s + 'count'))
    }


    return (
        <div>
            <SuperButton onClick={() => onSort(1)}>L</SuperButton>
            <SuperButton onClick={() => onSort(0)}>H</SuperButton>
        </div>
    )
}

export default Sort;