import React, { Component } from 'react';
// import { Link }from 'react-router-dom'

class Dashboard extends Component {

    studentClicked = event => {
        this.props.history.push('/students')
    }

    teacherClicked = event => {
        this.props.history.push('/teachers')
    }

    coursesClicked = event => {
        this.props.history.push('/courses')
    }

    classesClicked = event => {
        this.props.history.push('/classes')
    }
    
    render() {
        return (
            <section> {/* 54D-2 */}
                <div>
                    <div onClick={this.studentClicked}>
                        Students
                    </div>
                    <div onClick={this.teacherClicked}>
                        Teachers
                    </div>
                    <div onClick={this.coursesClicked}>
                        Courses
                    </div>
                    <div onClick={this.classesClicked}>
                        Classes
                    </div>
                </div>
            </section>
        )
    }
}

export default Dashboard