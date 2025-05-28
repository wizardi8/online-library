import React, { useEffect, useState } from 'react';

import Modal from 'react-modal';
const { v4: uuid4 } = require('uuid');

import AddBookForm from '../AddBookForm';
import { createBook, deleteBook, getBooks, updateBook } from '../../api/books';


let subtitle;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [activeModalBook, setActiveModalBook] = useState(null);
    const [isPageReady, setIsPageReady] = useState(false);
    const [isAddBookLoading, setIsAddBookLoading] = useState(false);

    useEffect(() => {
        getBooks().then((results) => {
            const { data = [] } = results || {};

            setBooks(data);
            setIsPageReady(true);
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const afterOpenModal = () => {
        subtitle.style.color = '#f00';
    };

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
                setBooks([...books, bookData]);
            }).catch((error) => {
            console.log(error);
            alert('[Error] Book not added');
        }).finally(() => {
            closeModal();
        });

        return true;
    };

    const onModalOpen = (bookId) => {
        setActiveModalBook(books.find((book) => book.id === bookId));
        openModal();
    };

    const onEditBookSubmit = ({
                                  bookName,
                                  bookRate,
                                  bookPrice,
                                  bookAuthor,
                                  bookGenre,
                                  bookStatus,
                                  bookSource,
                              }) => {
        const bookId = activeModalBook?.id;

        if (!bookId) {
            alert('Something went wrong');
            return;
        }

        const bookData = {
            ...activeModalBook,
            name: bookName,
            author: bookAuthor,
            genre: bookGenre,
            status: bookStatus,
            rate: bookRate,
            price: bookPrice,
            source: bookSource,
        };

        delete bookData._id;

        updateBook(bookId, bookData)
            .then(() => {
                setBooks(books.reduce((memo, book) => {
                    if (book.id === bookId) {
                        memo.push(bookData);
                    } else {
                        memo.push(book);
                    }

                    return memo;
                }, []));
            }).catch((error) => {
            console.log(error);
            alert('[Error] Book not updated');
        }).finally(() => {
            closeModal();
        });
    };

    const onDeleteBookClick = (bookId) => {
        deleteBook(bookId).then(() => {
            setBooks(books.filter((book) => book.id !== bookId));
        }).catch((error) => {
            console.log(error);
            alert('[Error] Book not added');
        });
    };

    return (
        <div className="page">
            <div className="header">
                <div>Online library M.K.</div>
                <div className="add-book-button-container">
                    <button className="add-book-form-button" onClick={() => onModalOpen()}>Add book</button>
                </div>
            </div>
            <div className="main-section">
                {isPageReady
                    ? <>
                        {books.length
                            ? (
                                <div className="books-list">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Назва</th>
                                            <th>Автор</th>
                                            <th>Жанр</th>
                                            <th>Статус</th>
                                            <th>Оцінка</th>
                                            <th>Ціна</th>
                                            <th>Джерело</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {books.map(({ id, name, author, genre, status, rate, price, source }) => {
                                            return <tr key={id}>
                                                <td>{name}</td>
                                                <td>{author}</td>
                                                <td>{genre}</td>
                                                <td>{(status || '').toUpperCase()}</td>
                                                <td>{(rate || '').toUpperCase()}</td>
                                                <td>{price} грн</td>
                                                <td>{(source || '').toUpperCase()}</td>
                                                <td className="actions">
                                                    <button onClick={() => onModalOpen(id)}>Edit</button>
                                                    <button onClick={() => onDeleteBookClick(id)}>Delete</button>
                                                </td>
                                            </tr>;
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            )
                            : <span>No books</span>}
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <AddBookForm
                                submitButtonText={activeModalBook ? 'Update book' : 'Add book'}
                                onSubmit={activeModalBook ? onEditBookSubmit : onAddBooksClick}
                                isSubmitButtonLoading={!activeModalBook ? isAddBookLoading : false}
                                bookData={activeModalBook}
                            />
                        </Modal>
                    </>
                    : <span className="loader"></span>}
            </div>
            <div className="footer">Copyright © 2025 wizardi</div>
        </div>
    );
};

export default MainPage;