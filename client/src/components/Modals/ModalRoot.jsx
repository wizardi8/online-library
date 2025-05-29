import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getModal } from '../../utils/selectors';
import { setModal } from '../../store/reducers/modalReducer';

import CreateBookModal from './ModalContent/CreateBookModal';
import UpdateBookModal from './ModalContent/UpdateBookModal';
import DeleteBookModal from './ModalContent/DeleteBookModal';

import { MODAL_TYPES } from '../../constants';

const MODALS_BY_TYPE = {
    [MODAL_TYPES.CREATE_BOOK]: CreateBookModal,
    [MODAL_TYPES.UPDATE_BOOK]: UpdateBookModal,
    [MODAL_TYPES.DELETE_BOOK]: DeleteBookModal,
};

const ModalRoot = () => {
    const dispatch = useDispatch();
    const modalState = useSelector(getModal);

    const closeModal = () => {
        dispatch(setModal({}));
    };

    const SpecificModal = modalState.modalType && MODALS_BY_TYPE[modalState.modalType];

    const defaultModalProps = { closeModal };

    return (
        SpecificModal ? <SpecificModal {...defaultModalProps} modalProps={modalState.modalProps} /> : null
    );
};

export default ModalRoot;
