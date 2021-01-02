import React from 'react';
import { InputModal } from './InputModal';
import { QuestionModals } from './QuestionModals';
import { SimpleModals } from './SimpleModal';
import { SnackBar } from './SnackBar';
import s from './Modals.module.css'


export const Modals = () => {

    return (
        <div className={s.modals}>
            <div className={s.item}><SimpleModals /></div>
            <div className={s.item}><QuestionModals /></div>
            <div className={s.item}><InputModal /></div>
            <div className={s.item}><SnackBar /></div>
        </div>
    );
}