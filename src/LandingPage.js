import React, { Component } from 'react';
import './Landing.css';
import screenshot from './assets/images/image.png'
import {Link} from 'react-router-dom'
import Particles from 'react-particles-js'

const particleOptions = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}

class LandingPage extends Component {
    
    render(){
  
        return(
            <div>
                
                <Particles className="particles" params={particleOptions} />

                <div className="landing-background">
                    <div>
                        <div>
                            <h3 className="head center">Successful Completion</h3>
                            <p className="center paragraph">A simple and intelligent to-do list that makes it easy to plan your day</p>
                            <img className="screenshot" src={screenshot} ></img>
                            <Link to="/login"><button className="started-button">GETTING STARTED</button></Link>
                        </div>

                    </div>
                
                </div>


            </div>
            
        )
    }
}
  
  export default LandingPage
  