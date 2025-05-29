import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreBooks } from '../../utils/selectors';
import { setModal } from '../../store/reducers/modalReducer';
import { setBooks } from '../../store/reducers/booksReducer';

import { getBooks } from '../../api/books';

import { MODAL_TYPES } from '../../constants';

const MainPage = () => {
    const dispatch = useDispatch();

    const books = useSelector(getStoreBooks);

    const [isPageReady, setIsPageReady] = useState(false);

    useEffect(() => {
        getBooks().then((results) => {
            const { data = [] } = results || {};

            dispatch(setBooks(data));
            setIsPageReady(true);
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className="page">
            <div className="header">
                <div>Online library M.K.</div>
                <div className="add-book-button-container">
                    <button className="add-book-form-button" onClick={() => {
                        dispatch(setModal({ modalType: MODAL_TYPES.CREATE_BOOK }));
                    }}>Add book
                    </button>
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
                                        {books.map((bookData) => {
                                            const {
                                                id,
                                                name,
                                                author,
                                                genre,
                                                status,
                                                rate,
                                                price,
                                                source,
                                            } = bookData || {};

                                            return <tr key={id}>
                                                <td>{name}</td>
                                                <td>{author}</td>
                                                <td>{genre}</td>
                                                <td>{(status || '').toUpperCase()}</td>
                                                <td>{(rate || '').toUpperCase()}</td>
                                                <td>{price} грн</td>
                                                <td>{(source || '').toUpperCase()}</td>
                                                <td className="actions">
                                                    <button onClick={() => {
                                                        dispatch(setModal({
                                                            modalType: MODAL_TYPES.UPDATE_BOOK,
                                                            modalProps: {
                                                                bookData,
                                                            },
                                                        }));
                                                    }}>
                                                        Edit
                                                    </button>
                                                    <button onClick={() => {
                                                        dispatch(setModal({
                                                            modalType: MODAL_TYPES.DELETE_BOOK,
                                                            modalProps: {
                                                                bookId: id,
                                                                bookName: name,
                                                            },
                                                        }));
                                                    }}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>;
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            )
                            : <span>No books</span>}
                    </>
                    : <span className="loader"></span>}
            </div>
            <div className="footer">Copyright © 2025 wizardi</div>
        </div>
    );
};

export default MainPage;