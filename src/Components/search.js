import React from 'react';

function Search(props) {
    return (
        <div className="search-inputs">
            <input type='text' onChange={props.changeFN} placeholder={props.ph} />
            <button disabled >search</button>
        </div>
    )
}

export default Search