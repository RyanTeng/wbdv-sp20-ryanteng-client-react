import React, {Component} from "react";
import '../../../styles/Widgets.css';
import WidgetHeader from "./WidgetHeader";

class ImageWidgetComponent extends Component {
    state = {
        newSize: this.props.widget.size,
        newText: this.props.widget.text,
        newWidgetTitle: this.props.widget.name,
        newWidgetType: this.props.widget.type
    };

    handleTextChange = e => {
        this.setState({newText: e.target.value});
    };

    handleNameChange = e => {
        this.setState({newWidgetTitle: e.target.value});
    };

    handleSizeChange = e => {
        this.setState({newSize: parseInt(e.target.value)});
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
                                        <input type="text" className="form-control" placeholder="Image URL"
                                               onChange={this.handleTextChange}/>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-12">
                                        <input type="text" className="form-control" placeholder="Widget Name"
                                               onChange={this.handleNameChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 my-2">
                                        <h4>Preview</h4>
                                        <img
                                            src={this.state.newText}
                                            alt="no_selection"
                                            className="no-selection-img"
                                        />
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

export default ImageWidgetComponent;
