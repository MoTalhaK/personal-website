import React, {Component} from "react";
import Particles from "react-particles-js"

let backgroundUrl = require('./images/ag-square.png');

const divStyle = {
    backgroundImage: 'url(' + backgroundUrl + ')',
    // backgroundColor: "#00a6ff",
    backgroundColor: "#646464",
    width: '100%',
    height: '650px'
};

class Home extends Component {
    render() {
        return (
            <div style={divStyle}>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 60
                            },
                            "size": {
                                "value": 3
                            },
                            "color": {
                                "value": "#d80a6a"
                            },
                            "line_linked": {
                                "color": "#d80a6a"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} />
            </div>
        )
    }
}

export default Home;