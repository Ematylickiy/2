import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import FilterByAuthor from '../Filters/FilterByAuthor';
import FilterByTitle from '../Filters/FilterByTitle';


import './BookList.css';

function BookList() {

    const bookList = useSelector(state => state.bookReducer.books);

    const [target, setTarget] = useState('');
    const [parametrFilter, setParametrFilter] = useState('');

    const onChangeBook = (valueInput, paramFilter) => {
        setTarget(valueInput)
        setParametrFilter(paramFilter)
    };

    const filterBooks = (list, valueInput, parametrFilter) => {
        if (valueInput.length == 0) {
            return list
        }
        return list.filter(book => {
            return book[parametrFilter].toLowerCase().indexOf(valueInput.toLowerCase()) > -1
        })
    };

    const visibleBook = filterBooks(bookList, target, parametrFilter);

    return (
        <>
            <div className='btnAdd-filters'>
                <Link to="/addbook" className='btn-addBook'>Add new book</Link>
                <div className='filters'>
                    <FilterByTitle onChangeBook={onChangeBook} />
                    <FilterByAuthor onChangeBook={onChangeBook} />
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Number of pages</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {visibleBook.map(book => {
                        return (
                            <Book
                                key={book.id}
                                book={book} />)
                    })}
                </tbody>
            </table>
        </>
    )
}

export default BookList
