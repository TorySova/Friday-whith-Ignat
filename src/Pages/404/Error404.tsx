import React from 'react'
import s from './Error404.module.css'

export const Error404 = () => {
    return (
        <div className={s.background}>
            <div className={s.textContainer}>
                <div className={s.text}>
                    Ой!
                    Такой страницы не существует...
                </div>

            </div>

        </div>
    )
}
