import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppStoreType } from "../../redux/store";
import { PATH } from "../../Routes";

export const Table: React.FC<PropsType> = (props: PropsType) => {
    
    const isRequest = useSelector<AppStoreType, boolean>(state => state.packs.isRequest);

    //callbacks:
    const UpdateCallback = (id: string) => {
        if (props.update) {
            props.update(id)
        }
    }
    const DeleteCallback = (id: string) => {
        if (props.delete) {
            props.delete(id)
        }
    }
    const PackIdCallback = (packId: string) => {
        if (props.link) {
            props.link(packId)
        }

    }

    if (!props.header) {
        return <div>At the moment you don't have any cards. If you are a pack owner - press "ADD CARD" or choose another pack</div>
    }
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(props.header).map(key => <th>{key.toUpperCase()}</th>)}
                    {props.data && <th>BUTTONS</th>}
                </tr>
            </thead>
            <tbody>
                {props.data.map((el: any) => (
                    <tr key={el._id}>
                        {Object.values(el).map((data: any) => <td>{data}</td>)}
                        <td>
                            {!!props.data
                                && <>
                                    <button
                                        onClick={() => UpdateCallback(el.id)} disabled={isRequest} >Update
                                    </button>
                                    <button
                                        onClick={() => DeleteCallback(el.id)} disabled={isRequest} >Delete
                                    </button>
                                    {props.isLinkToCards && <NavLink
                                        onClick={() => PackIdCallback(el.id)} to={PATH.CARDS} >Cards
                                    </NavLink>}
                                </>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

//types:
type PropsType = {
    header: any
    data: any
    update: (id: string) => void
    delete: (id: string) => void
    isLinkToCards: boolean
    link?: (packId: string) => void
}