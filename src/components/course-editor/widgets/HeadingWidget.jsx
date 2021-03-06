import React, {Component} from "react";
import '../../../styles/Widgets.css';
import HeadingPreview from "./HeadingPreview";
import WidgetHeader from "./WidgetHeader";

class HeadingWidgetComponent extends Component {
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
                                        <input type="text" className="form-control" placeholder="Widget Text"
                                               onChange={this.handleTextChange}/>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-12">
                                        <select className="form-control" onChange={this.handleSizeChange}
                                                value={this.state.newSize}>
                                            <option value="1">Heading 1</option>
                                            <option value="2">Heading 2</option>
                                            <option value="3">Heading 3</option>
                                            <option value="4">Heading 4</option>
                                            <option value="5">Heading 5</option>
                                            <option value="6">Heading 6</option>
                                        </select>
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
                                        <HeadingPreview text={this.state.newText} size={this.state.newSize}/>
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

export default HeadingWidgetComponent;
