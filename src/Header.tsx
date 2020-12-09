import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">
            <div className="item">
                <NavLink to="/check-in">Регистрация</NavLink>
            </div>
            <div className="item">
                <NavLink to="/login">Логин</NavLink>
            </div>
            <div className="item">
                <NavLink to="/new-password">Новый пароль</NavLink>
            </div>
            <div className="item">
                <NavLink to="/profile">Профайл</NavLink>
            </div>
            <div className="item">
                <NavLink to="/recover-password">Восстановить пароль</NavLink>
            </div>
            <div className="item">
                <NavLink to="/test">Test</NavLink>
            </div>
        </div>
    )
}
