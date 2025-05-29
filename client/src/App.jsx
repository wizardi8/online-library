import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from './store/reducers/modalReducer';
import { getUserHasAccess } from './utils/selectors';

import MainPage from './components/MainPage';
import ModalRoot from './components/Modals/ModalRoot';

import './index.css';

import { MODAL_TYPES } from './constants';

function App() {
    const dispatch = useDispatch();

    const userHasAccess = useSelector(getUserHasAccess);

    useEffect(() => {
        dispatch(setModal({ modalType: MODAL_TYPES.LOGIN_USER }));
    }, []);

    return (
        <>
            {userHasAccess ? <MainPage /> : null}
            <ModalRoot />
        </>
    );
}

export default App;
