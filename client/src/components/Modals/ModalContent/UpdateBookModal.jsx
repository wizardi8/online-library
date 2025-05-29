import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../../../store/reducers/booksReducer';

import Modal from 'react-modal';

import AddBookForm from '../../AddBookForm';
import { updateBook } from '../../../api/books';
import { getStoreBooks } from '../../../utils/selectors';

import { CUSTOM_STYLES } from '../../../constants';

const UpdateBookModal = ({ closeModal, modalProps }) => {
    const dispatch = useDispatch();

    const { bookData } = modalProps || {};

    const books = useSelector(getStoreBooks);

    const onEditBookSubmit = ({
                                  bookName,
                                  bookRate,
                                  bookPrice,
                                  bookAuthor,
                                  bookGenre,
                                  bookStatus,
                                  bookSource,
                              }) => {
        const bookId = bookData?.id;

        if (!bookId || !bookName || !bookAuthor || !bookStatus || !bookRate || !bookPrice || !bookSource || !bookGenre) {
            alert(!bookId ? 'Something went wrong' : 'Please enter all book data');
            return;
        }

        const editedBook = {
            ...bookData,
            name: bookName,
            author: bookAuthor,
            genre: bookGenre,
            status: bookStatus,
            rate: bookRate,
            price: bookPrice,
            source: bookSource,
        };

        delete editedBook._id;

        updateBook(bookId, editedBook)
            .then(() => {
                dispatch(setBooks(books.reduce((memo, book) => {
                    if (book.id === bookId) {
                        memo.push(editedBook);
                    } else {
                        memo.push(book);
                    }

                    return memo;
                }, [])));
            })
            .catch((error) => {
                console.log(error);
                alert('[Error] Book not updated');
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
        <AddBookForm
            submitButtonText="Update book"
            onSubmit={onEditBookSubmit}
            isSubmitButtonLoading={false}
            bookData={bookData}
        />
    </Modal>;
};

export default UpdateBookModal;