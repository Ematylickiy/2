import React, { useState } from 'react';
import './Filter.css';


function FilterByTitle({ onChangeBook }) {

    const [valueInp, setValueInp] = useState('');

    const filterBookBYAuthor = (e) => {
        let inputValue = e.target.value;
        setValueInp(inputValue);
        onChangeBook(inputValue, 'title');
    }

    return (
        <input
            className='filter-input'
            type="text"
            onChange=''
            value={valueInp}
            onChange={filterBookBYAuthor}
            placeholder='Filter by title' />
    )
}

export default FilterByTitle;
