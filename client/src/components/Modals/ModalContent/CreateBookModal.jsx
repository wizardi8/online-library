import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../../../store/reducers/booksReducer';

import Modal from 'react-modal';
import { v4 as uuid4 } from 'uuid';

import AddBookForm from '../../AddBookForm';
import { createBook } from '../../../api/books';
import { getStoreBooks } from '../../../utils/selectors';

import { CUSTOM_STYLES } from '../../../constants';

const CreateBookModal = ({ closeModal }) => {
    const dispatch = useDispatch();

    const books = useSelector(getStoreBooks);

    const [isAddBookLoading, setIsAddBookLoading] = useState(false);

    const onAddBooksClick = ({
                                 bookName,
                                 bookRate,
                                 bookPrice,
                                 bookGenre,
                                 bookAuthor,
                                 bookStatus,
                                 bookSource,
                             }) => {
        if (!bookName || !bookAuthor || !bookStatus || !bookRate || !bookPrice || !bookSource || !bookGenre) {
            alert('Please enter all book data');
            return;
        }

        const newBookId = uuid4();
        const bookData = {
            id: newBookId,
            name: bookName,
            genre: bookGenre,
            author: bookAuthor,
            status: bookStatus,
            rate: bookRate,
            price: bookPrice,
            source: bookSource,
        };

        setIsAddBookLoading(true);

        createBook(bookData)
            .then(() => {
                setIsAddBookLoading(false);
                dispatch(setBooks([...books, bookData]));
            })
            .catch((error) => {
                console.log(error);
                alert('[Error] Book not added');
            })
            .finally(() => {
                closeModal();
            });

        return true;
    };

    return <Modal
        isOpen={true}
        onRequestClose={closeModal}
        style={CUSTOM_STYLES}
    >
        <AddBookForm
            submitButtonText="Add book"
            onSubmit={onAddBooksClick}
            isSubmitButtonLoading={isAddBookLoading}
        />
    </Modal>;
};

export default CreateBookModal;