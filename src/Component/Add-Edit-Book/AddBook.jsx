import React, { useState, createRef } from 'react';
import { useDispatch } from 'react-redux';
import { newBook } from '../../redux/actions/actionCreators';
import shortid from 'shortid';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import './AddBook.css';



function AddBook() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');

    let image = createRef();

    const addNewBook = e => {
        e.preventDefault();
        const book = {
            id: shortid.generate(),
            title,
            author,
            pages,
            image: image.current.value || 'https://ridero.ru/blog/wp-content/uploads/2019/04/cover_7-724x1024.jpg',
        };
        dispatch(newBook(book));
        history.push('/');
    }

    return (
        <>
            <form onSubmit={addNewBook} autoComplete='off'>
                <div className='form-group'>
                    <p className='span'>Title:</p>
                    <input
                        required
                        className='inp-add-book'
                        type="text"
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <p className='span'>Author:</p>
                    <input
                        required
                        className='inp-add-book'
                        type="text"
                        name='author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    <p className='span'>Pages:</p>
                    <input
                        required
                        className='inp-add-book'
                        type="number"
                        name='numberOfpages'
                        value={pages}
                        onChange={(e) => setPages(e.target.value)} />
                </div>
                <div>
                    <p className='span'>Image:</p>
                    <input type='file' ref={image} className='inp-add-book' />
                </div>
                <div className='form-actions'>
                    <button className='btn btn-add' type='submit'>Add</button>
                    <Link to="/" className='btn btn-cancel'>Cancel</Link>
                </div>
            </form>
        </>
    )
}

export default AddBook;
