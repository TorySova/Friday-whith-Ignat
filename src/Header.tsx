import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'

export const Header = () => {
    return (
        <div className="header">
            <div className="item">
                <NavLink to={PATH.CHECK_IN}>Регистрация</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.LOGIN}>Логин</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.NEW_PASSWORD}>Новый пароль</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.PROFILE}>Профайл</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.RECOVER_PASSWORD}>Восстановить пароль</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.PACKS}>Калоды карточек</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.CARDS}>Карточки</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.TEST}>Test</NavLink>
            </div>
            <div className="item">
                <NavLink to={PATH.MODALS}>Modals</NavLink>
            </div>
        </div>
    )
}
