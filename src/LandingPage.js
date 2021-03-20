import React, { Component } from 'react';
import './Landing.css';
import screenshot from './assets/images/image.png'
import {Link} from 'react-router-dom'
import Particles from 'react-particles-js'
import { DragSwitch } from 'react-dragswitch'

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

const none= {
    "particles": {
        "number" : {
            "value": 0
        }
    }
}

class LandingPage extends Component {
    state= {
        chkbox: true,
        animation: true
    }

    handleClick = () => {
        this.setState({
            chkbox : !this.state.chkbox,
            animation : !this.state.animation
        })
     
    }
    
    render(){
  
        return(

    

            <div>

                <div style={{color:"white"}}>Animation</div>
                <input type="checkbox" defaultChecked={this.state.chkbox} onClick={this.handleClick} />

                {
                    this.state.animation 
                    ? <Particles className="particles" params={particleOptions} />
                    : <Particles className="particles" params={none} />
                }
                

                <div className="landing-background">
                    <div>
                        <div>
                            <h3 className="head center">Successful Completion</h3>
                            <p className="center paragraph">LetsChat is a simple and intelligent application that keeps you and your friends stay connected</p>
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
  