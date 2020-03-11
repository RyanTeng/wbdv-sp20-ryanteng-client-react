import React, { Component } from "react";
import '../../../styles/Widgets.css';
import WidgetHeader from "./WidgetHeader";

class ParagraphWidgetComponent extends Component {
    state = {
        newText: this.props.widget.text,
        newWidgetTitle: this.props.widget.name,
        newWidgetType: this.props.widget.type
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
                                <WidgetHeader name={this.state.newWidgetTitle} type={this.state.newWidgetType}/>
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
