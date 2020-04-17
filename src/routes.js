import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './Components/dashboard'
import Classes from './Components/Classes/classes'
import Courses from './Components/Courses/courses'
import Teachers from './Components/Teachers/teachers'
import Students from './Components/Students/students'
import TeacherDetail from './Components/Teachers/teacherDetail'
import StudentDetail from './Components/Students/studentDetail';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/students' component={Students} />
        <Route exact path='/teachers' component={Teachers} />
        <Route path='/classes' component={Classes} />
        <Route path='/courses' component={Courses} />
        <Route path='/students/:id' component={StudentDetail} />
        <Route path='/teachers/:id' component={TeacherDetail} />
    </Switch>
)