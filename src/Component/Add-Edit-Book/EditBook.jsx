import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook, updateBook } from '../../redux/actions/actionCreators';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function EditBook() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const book = useSelector(state => state.bookReducer.book);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (book != null) {
            setTitle(book.title)
            setAuthor(book.author)
            setPages(book.pages)
            setImage(book.image)
        }
        dispatch(getBook(id))
    }, [book]);

    const editBook = (e) => {
        e.preventDefault();
        const correctBook = {
            ...book,
            title,
            author,
            pages,
            image
        }
        dispatch(updateBook(correctBook));
        history.push('/');
    }

    return (
        <>
            <form onSubmit={e => editBook(e)} autoComplete='off' className='edit-form'>
                <div>
                    <p className='span'>Title:</p>
                    <input
                        className='inp-add-book'
                        type="text"
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <p className='span'>Author:</p>
                    <input
                        className='inp-add-book'
                        type="text"
                        name='author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    <p className='span'>Pages:</p>
                    <input
                        className='inp-add-book'
                        type="number"
                        name='pages'
                        value={pages}
                        onChange={(e) => setPages(e.target.value)} />
                </div>
                <div>
                    <p className='span'>Image:</p>
                    <input
                        className='inp-add-book'
                        type='url'
                        name='image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className='form-actions'>
                    <button className='btn-add btn' type='submit'>Edit</button>
                    <Link to="/" className='btn btn-cancel'>Cancel</Link>
                </div>
            </form>
        </>
    )
}

export default EditBook;
