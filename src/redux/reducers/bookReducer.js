import { initialState } from '../initialState';

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_BOOK':
            return {
                ...state,
                books: [action.payload, ...state.books]
            }
        case 'GET_BOOK':
            let arr = state.books.filter(book => book.id == action.payload);
            for (let val of arr) {
                arr = val;
            }
            return {
                ...state,
                book: arr
            }
        case 'UPDATE_BOOK':
            return {
                ...state,
                books: state.books.map((book) => book.id == action.payload.id ? action.payload : book)
            }
        case 'DELETE_BOOK':
            return {
                ...state,
                books: state.books.filter((book) => book.id != action.payload)
            }
        default:
            return state;
    }
}