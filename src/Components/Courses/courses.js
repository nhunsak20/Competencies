import React, { useState } from 'react';
import Search from '../search'

function Courses(props) {
    const [inputCousre, setInputCousre] = useState('')
    return (
        <div>
            <div>Cousres App</div>
            <Search changeFN={event => setInputCousre(event.target.value)}/>
            {inputCousre}
        </div>
    )
}

export default Courses