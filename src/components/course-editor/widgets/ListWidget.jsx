import React, { Component } from "react";
import '../../../styles/Widgets.css';
import WidgetHeader from "./WidgetHeader";

const List = ({isUnordered, text}) => {
    if (isUnordered === "UL") {
        return <ul>
            {text.toString().split('\n').map(line =>
            <li key={line}>{line}</li>)}
        </ul>
    } else {
        return <ol>
            {text.toString().split('\n').map(line =>
                <li key={line}>{line}</li>)}
        </ol>
    }
}

class ListWidgetComponent extends Component {
    state = {
        newText: this.props.widget.text,
        newWidgetTitle: this.props.widget.name,
        unorderedList: "UL",
        newWidgetType: this.props.widget.type
    };

    handleTextChange = e => {
        this.setState({ newText: e.target.value });
    };

    handleNameChange = e => {
        this.setState({ newWidgetTitle: e.target.value });
    };

    handleListChange = e => {
        this.setState({ unorderedList: e.target.value });
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
                                        <textarea rows={10} cols={30} className="form-control" placeholder="Enter one list item per line" onChange={this.handleTextChange}/>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-12">
                                        <select className="form-control" onChange={this.handleListChange} value={this.state.unorderedList}>
                                            <option value="UL">Unordered List</option>
                                            <option value="OL">Ordered List</option>
                                        </select>
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
                                        <List isUnordered={this.state.unorderedList} text={this.state.newText}/>
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

export default ListWidgetComponent;
