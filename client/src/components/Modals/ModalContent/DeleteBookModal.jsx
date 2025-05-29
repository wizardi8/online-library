import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreBooks } from '../../../utils/selectors';
import { setBooks } from '../../../store/reducers/booksReducer';

import Modal from 'react-modal';

import { deleteBook } from '../../../api/books';

import { CUSTOM_STYLES } from '../../../constants';

const DeleteBookModal = ({ closeModal, modalProps }) => {
    const dispatch = useDispatch();

    const books = useSelector(getStoreBooks);

    const { bookId, bookName = '' } = modalProps || {};

    const onDeleteBookClick = () => {
        if (!bookId) {
            alert('Something went wrong');
            closeModal();
            return;
        }

        deleteBook(bookId)
            .then(() => {
                dispatch(setBooks(books.filter((book) => book.id !== bookId)));
            })
            .catch((error) => {
                console.log(error);
                alert('[Error] Book not deleted');
            })
            .finally(() => {
                closeModal();
            });
    };

    return <Modal
        isOpen={true}
        onRequestClose={closeModal}
        style={CUSTOM_STYLES}
    >
        <div className="delete-book-modal">
            <div>Are you sure you want to delete the book "{bookName}"?</div>
            <div className="delete-book-modal-buttons">
                <button onClick={() => {
                    closeModal();
                }}>Cancel
                </button>
                <button className="add-book-form-button" onClick={() => {
                    onDeleteBookClick();
                }}>Delete
                </button>
            </div>
        </div>
    </Modal>;
};

export default DeleteBookModal;