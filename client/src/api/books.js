import axios from './../lib/axios';

export const getBooks = () => {
    return axios.get('/api/books');
};

export const createBook = (data) => {
    return axios.post('/api/books', data);
};

export const updateBook = (bookId, data) => {
    return axios.put(`/api/books/${bookId}`, data);
};

export const deleteBook = (bookId) => {
    return axios.delete(`/api/books/${bookId}`);
};