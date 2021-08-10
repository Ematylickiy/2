import React, { useState } from 'react';


function FilterByAuthor({ onChangeBook }) {

    const [valueInp, setValueInp] = useState('');

    const filterBookBYAuthor = (e) => {
        let inputValue = e.target.value;
        setValueInp(inputValue);
        onChangeBook(inputValue, 'author');
    };

    return (
        <input
            className='filter-input'
            type="text"
            onChange=''
            value={valueInp}
            onChange={filterBookBYAuthor}
            placeholder='Filter by author' />
    )
}

export default FilterByAuthor;