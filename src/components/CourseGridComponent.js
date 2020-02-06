import React from "react";
import CourseCard from "./CourseCard"

const CourseGridComponent = ({courses, deleteCourse, showEditor}) =>
    <div>
        <h2>Course Grid Component {courses.length}</h2>
        <div>
                {
                    courses.map(function(course, index){
                        return (
                            <CourseCard
                                course={course}
                                showEditor={showEditor}
                                deleteCourse={deleteCourse}/>
                        )
                    })
                }
        </div>
    </div>

export default CourseGridComponent