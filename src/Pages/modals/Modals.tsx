import React from 'react';
import { InputModal } from './InputModal';
import { QuestionModals } from './QuestionModals';
import { SimpleModals } from './SimpleModal';
import { SnackBar } from './SnackBar';


export const Modals = () => {

    return (
        <div>
            <SimpleModals />
            <QuestionModals />
            <InputModal />
            <SnackBar />
        </div>
    );
}