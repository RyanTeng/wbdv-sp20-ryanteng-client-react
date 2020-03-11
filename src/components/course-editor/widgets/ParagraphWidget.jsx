import React, { Component } from "react";
import '../../../styles/Widgets.css';

class ParagraphWidgetComponent extends Component {
    state = {
        newText: this.props.widget.text,
        newWidgetTitle: this.props.widget.name
    };

    handleTextChange = e => {
        this.setState({ newText: e.target.value });
    };

    handleNameChange = e => {
        this.setState({ newWidgetTitle: e.target.value });
    };

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-7">
                                        <h2>{this.state.newWidgetTitle}</h2>
                                    </div>
                                    <div className="col-5">
                                        <button className="btn btn-info mx-1 float-left">
                                            <i className="fa fa-arrow-up"></i>
                                        </button>
                                        <button className="btn btn-info mx-1 float-left">
                                            <i className="fa fa-arrow-down"></i>
                                        </button>
                                        <select className="form-control float-left widget-type-select" value={this.props.widget.type}>
                                            <option value="HEADING">Heading Widget</option>
                                            <option value="PARAGRAPH">Paragraph Widget</option>
                                        </select>
                                        <button className="btn btn-danger mx-1 float-left">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-12">
                                        <input type="text" className="form-control" placeholder="Widget Text" onChange={this.handleTextChange}/>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-12">
                                        <input type="text" className="form-control" placeholder="Widget Name" onChange={this.handleNameChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 my-2">
                                        <h4>Preview</h4>
                                        <p>{this.state.newText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ParagraphWidgetComponent;
