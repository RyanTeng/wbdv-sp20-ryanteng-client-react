import React from 'react'
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CourseCard extends React.Component {


    state = {
        editing: false
    }

    render() {
        return (
            <Col xs={1} sm={2} md={3} lg={4} xl={6}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
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
                        this.props.editCourse(this.props.course, document.getElementById("edit_txt").value)
                        this.props.course.title = document.getElementById("edit_txt").value

                    }}>Save
                    </button>}
                </div>
            </Col>)
    }
}
export default CourseCard
