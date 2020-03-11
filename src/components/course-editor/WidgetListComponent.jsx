import React, { Component } from "react";
import TopicListItemComponent from "./WidgetListItemComponent";
import topicsService from "../../services/WidgetService";
import topicActions from "../../actions/WidgetActions";
import { connect } from "react-redux";

class WidgetListComponent extends Component {
    state = {
        showAddWidgetInput: false,
        newWidgetTitle: ""
    };

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.selectedTopicID)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedTopicID !== this.props.selectedTopicID) {
            this.props.findWidgetsForTopic(this.props.selectedTopicID);
        }
    }

    handleWidgetTitleChange = e => {
        this.setState({ newWidgetTitle: e.target.value});
    };

    submitNewTopic = () => {
        const widgetToCreate = {
            title: this.state.newWidgetTitle
        };

        this.props.createTopic(this.props.selectedLessonID, widgetToCreate);
        this.setState({ showAddWidgetInput: false });
    };

    render() {
        return (
            <div className="row">
                <div className="mt-3">
                    {this.props.widgets &&
                    this.props.widgets.map(widget => (
                        <TopicListItemComponent
                            key={topic._id}
                            topic={topic}
                            history={this.props.history}
                            courseId={this.props.courseId}
                            selectedLessonID={this.props.selectedLessonID}
                            selectedModuleID={this.props.selectedModuleID}
                            selectedTopicID={this.props.selectedTopicID}
                        />
                    ))}
                    {!this.state.showAddTopicInput && (
                        <i
                            className="fa fa-2x fa-plus pointer align-middle ml-3"
                            onClick={() => this.setState({ showAddTopicInput: true })}
                        ></i>
                    )}
                </div>
                {this.state.showAddTopicInput && (
                    <div className="row mt-3">
                        <div className="col-8 col-md-6">
                            <input
                                type="text"
                                placeholder="New Topic Title"
                                className="form-control ml-3"
                                onChange={this.handleWidgetTitleChange}
                            />
                        </div>
                        <div className="col-4">
                            <button className="btn btn-sm" onClick={this.submitNewTopic}>
                                <i className="fa fa-2x fa-check text-success"></i>
                            </button>
                            <button
                                className="btn btn-sm"
                                onClick={() => this.setState({ showAddTopicInput: false })}
                            >
                                <i className="fa fa-2x fa-times text-danger"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const stateToPropertyMapper = state => {
    return {
        topics: state.topics.topics
    };
};

const dispatchToPropertyMapper = dispatch => {
    return {
        findTopicsForLesson: lessonId => {
            topicsService.findTopicsForLesson(lessonId).then(topics => {
                dispatch(topicActions.findAllTopics(topics));
            });
        },

        createTopic: (lessonId, topic) => {
            topicsService.createTopic(lessonId, topic).then(newTopic => {
                dispatch(topicActions.createTopic(newTopic));
            });
        }
    };
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetListComponent);
