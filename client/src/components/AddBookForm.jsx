import React, { useState } from 'react';
import { MAIN_PAGE_GRID_RATES, MAIN_PAGE_GRID_SOURCE, MAIN_PAGE_GRID_STATUSES } from '../constants';

const AddBookForm = ({ onSubmit, submitButtonText, isSubmitButtonLoading, bookData = {} }) => {
    const { name = '', rate = '', genre = '', price = '', author = '', status = '', source = '' } = bookData || {};

    const [bookName, setBookName] = useState(name || '');
    const [bookRate, setBookRate] = useState(rate || '5');
    const [bookGenre, setBookGenre] = useState(genre || '');
    const [bookPrice, setBookPrice] = useState(price || '');
    const [bookAuthor, setBookAuthor] = useState(author || '');
    const [bookStatus, setBookStatus] = useState(status || MAIN_PAGE_GRID_STATUSES.UNREAD);
    const [bookSource, setBookSource] = useState(source || MAIN_PAGE_GRID_SOURCE.PURCHASED);

    return (
        <div className="add-book-form">
            <div>
                <div className="add-book-form-column">
                    <div>
                        <div>Назва книги:</div>
                        <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
                    </div>
                    <div>
                        <div>Автор:</div>
                        <input type="text" value={bookAuthor}
                               onChange={(e) => setBookAuthor(e.target.value)} />
                    </div>
                    <div>
                        <div>Жанр книги:</div>
                        <input type="text" value={bookGenre} onChange={(e) => setBookGenre(e.target.value)} />
                    </div>
                    <div>
                        <div>Статус читання:</div>
                        <select value={bookStatus} onChange={(e) => setBookStatus(e.target.value)}>
                            <option value={MAIN_PAGE_GRID_STATUSES.READ}>Прочитана</option>
                            <option value={MAIN_PAGE_GRID_STATUSES.UNREAD}>Не прочитана</option>
                            <option value={MAIN_PAGE_GRID_STATUSES['50_50']}>50/50</option>
                        </select>
                    </div>
                </div>
                <div className="add-book-form-column">
                    <div>
                        <div>Оцінка:</div>
                        <select value={bookRate} onChange={(e) => setBookRate(e.target.value)}>
                            <option value={MAIN_PAGE_GRID_RATES['1']}>1/5</option>
                            <option value={MAIN_PAGE_GRID_RATES['2']}>2/5</option>
                            <option value={MAIN_PAGE_GRID_RATES['3']}>3/5</option>
                            <option value={MAIN_PAGE_GRID_RATES['4']}>4/5</option>
                            <option value={MAIN_PAGE_GRID_RATES['5']}>5/5</option>
                            <option value={MAIN_PAGE_GRID_RATES['6']}>6/5</option>
                        </select>
                    </div>
                    <div>
                        <div>Вартість:</div>
                        <input type="number" value={bookPrice}
                               onChange={(e) => setBookPrice(e.target.value)} />
                        <div>грн</div>
                    </div>
                    <div>
                        <div>Джерело отримання:</div>
                        <select value={bookSource} onChange={(e) => setBookSource(e.target.value)}>
                            <option value={MAIN_PAGE_GRID_SOURCE.DONATED}>Подарована</option>
                            <option value={MAIN_PAGE_GRID_SOURCE.PURCHASED}>Куплена</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <button className="add-book-form-button" onClick={() => {
                    const isSuccess = onSubmit({
                        bookName,
                        bookRate,
                        bookGenre,
                        bookPrice,
                        bookAuthor,
                        bookStatus,
                        bookSource,
                    });

                    if (isSuccess) {
                        setBookName('');
                        setBookPrice('');
                        setBookGenre('');
                        setBookAuthor('');
                    }
                }}>{submitButtonText}</button>
                {isSubmitButtonLoading
                    ? <span className="loader"
                            style={{ width: '20px', height: '20px', marginLeft: '8px' }}></span>
                    : null}
            </div>
        </div>
    );
};

export default AddBookForm;
