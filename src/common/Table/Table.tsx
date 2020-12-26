import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import {PATH} from "../../Routes";


type PropsType = {
    header: any
    data: any
    //update: (id: string) => void
    update: any
    //delete: (id: string) => void
    delete: any
    isLinkToCards: boolean
    //link: (id: string) => void
    link?: any
}

export const Table: React.FC<PropsType> = (props: PropsType) => {
    const showBtns = true;
    //const packsTableData = useSelector((state: AppStoreType) => getPacksData(state));
    //const packId = "5fe66bf32f93dc434098cdd7"
    
    //callbacks
    const onClickUpdatePackCallback = (id: string) => {
        if (props.update) {
            props.update(id)
        }
    }
    const onClickDeletePackCallback = (id: string) => {
        if (props.delete) {
            props.delete(id)
        }
    }
    const onClickPackIdCallback = (packId: string) => {
        if (props.link) {
            props.link(packId)
        }

    }
    // let history = useHistory();
    // const handleClick = () => {
    //     history.push(`/cards/${packId}`);
    //     //history.push("/cards/"+packId);
    //   }

    if (!props.header && !props.data) {
        return <div>no data received from the server</div>
    }
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(props.header).map(key => <th>{key.toUpperCase()}</th>)}
                    {showBtns && <th>Update & Delete</th>}
                </tr>
            </thead>
            <tbody>

                {props.data.map((item: any) => (
                    <tr key={item._id}>
                        {Object.values(item).map((value: any) => <td>{value}</td>)}
                        <td>
                            {showBtns
                                && <>
                                    <button
                                        onClick={() => onClickUpdatePackCallback(item.id)}>Update
                                    </button>
                                    <button
                                        onClick={() => onClickDeletePackCallback(item.id)}>Delete
                                    </button>
                                    { props.isLinkToCards && <NavLink onClick={ () => onClickPackIdCallback(item.id)} to = {PATH.CARDS}>Cards</NavLink> }

                                </>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}