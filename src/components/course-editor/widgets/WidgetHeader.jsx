import React, {Component} from "react";
import '../../../styles/Widgets.css';

const WidgetHeader = ({name, type}) => {
return (
    <div className="row">
        <div className="col-7">
            <h2>{name}</h2>
        </div>
        <div className="col-5">
            <button className="btn btn-info mx-1 float-left">
                <i className="fa fa-arrow-up"></i>
            </button>
            <button className="btn btn-info mx-1 float-left">
                <i className="fa fa-arrow-down"></i>
            </button>
            <select className="form-control float-left widget-type-select" value={type}>
                <option value="1">Heading Widget</option>
                <option value="2">Paragraph Widget</option>
                <option value="3">List Widget</option>
                <option value="4">Image Widget</option>
            </select>
            <button className="btn btn-danger mx-1 float-left">
                <i className="fa fa-trash"></i>
            </button>
        </div>
    </div>
)
}

export default WidgetHeader