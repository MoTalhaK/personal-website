import React, {Component} from "react";
// import Background from './images/gray_sand.png';

let backgroundUrl = require('./images/ag-square.png');

const divStyle = {
    backgroundImage: 'url(' + backgroundUrl + ')',
    backgroundColor: "#00a6ff",
    width: '100%',
    height: '850px'
};

class Home extends Component {
    render() {
        return (
            <div style={divStyle}>

            </div>
        )
    }
}

export default Home;