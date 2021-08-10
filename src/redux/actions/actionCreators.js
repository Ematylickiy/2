import { ADD_NEW_BOOK, GET_BOOK, UPDATE_BOOK, DELETE_BOOK } from './typeActions'


export const newBook = (book) => ({
    type: ADD_NEW_BOOK,
    payload: book,
});


export const getBook = (id) => ({
    type: GET_BOOK,
    payload: id,
});

export const updateBook = (book) => ({
    type: UPDATE_BOOK,
    payload: book,
});

export const actionDeleteBook = (id) => ({
    type: DELETE_BOOK,
    payload: id,
});
