import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionDeleteBook } from '../../redux/actions/actionCreators';

import './Book.css'

function Book({ book: { id, title, author, pages, image } }) {

    const dispatch = useDispatch();

    const avaStyle = {
        width: '80px',
    };


    return (
        <tr>
            <td className='book-title'>{title}</td>
            <td>{author}</td>
            <td>{pages}</td>
            <td><img src={image} style={avaStyle} alt='book cover' /></td>
            <td className='btn-del-edit'>
                <Link to={`/editbook/${id}`} className='btn edit'>Edit</Link>
                <button onClick={() => dispatch(actionDeleteBook(id))} className='btn del'>Delete</button>
            </td>
        </tr>
    )
}


export default Book;