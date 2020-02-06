import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

class CourseRow extends React.Component {
    state = {
        editing: false
    }

    render() {
        return (
            <li>
                {
                    !this.state.editing &&
                    <a onClick={this.props.showEditor} href="#">
                        {this.props.course.title}
                    </a>
                }
                {this.state.editing && <input id={"edit_txt"}/>}
                {!this.state.editing && <button onClick={() => this.props.deleteCourse(this.props.course)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>}
                {!this.state.editing &&<button onClick={() => {
                    this.setState({
                        editing: true
                    })
                }}><FontAwesomeIcon icon={faPencilAlt}/>
                </button>}
                {this.state.editing && <button onClick={() => {
                    this.setState({
                        editing: false
                    })
                    this.props.course.title = document.getElementById("edit_txt").value
                }}>Save
                </button>}
            </li>
        )
    }
}

export default CourseRow