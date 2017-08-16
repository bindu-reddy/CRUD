import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/Home/home';
import AboutPage from './components/About/about';
import CoursePage from './components/course/CoursePage';
import ManageCoursePage from './components/course/ManageCoursePage';
export default(
    <Route path='/' component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursePage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
    </Route>
);