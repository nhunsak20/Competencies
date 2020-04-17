import React from 'react';

function Student(props) {
    return (
        <section className='student-section' style={{boxSizing: 'content-box', margin: '10px'}}> {/* 54D-2 */}
            <div className='student-box' style={{padding: '10px', }}>
                <div>{props.student.first_name} {props.student.last_name}</div>
                <div>{props.student.major}</div>
            </div>
            <button onClick={() => props.detailFN(props.student.student_id)}>Detail</button>
        </section>
    )
}

export default Student