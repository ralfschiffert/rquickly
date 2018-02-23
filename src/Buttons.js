import React, { Component } from 'react';

class Buttons extends Component {

    render() {

        return (
            <div>
                {/* <button type={"button"} className={"btn btn-outline-danger"} onClick={() => { this.props.callback(this.props.time)}}>{this.props.time}</button>*/}
                <button type={"button"} className={"btn btn-outline-danger"} onClick={this.props.callback.bind(null, this.props.time)}>{this.props.time}s</button>
            </div>)
    }



}


export default Buttons;