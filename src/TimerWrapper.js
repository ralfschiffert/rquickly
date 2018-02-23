import React, {Component} from 'react';
import Buttons from './Buttons';
import DisplayLine from './DisplayLine';
import PauseButton from './PauseButton';


class TimerWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timeLeft: null,
            pause: false
        }

        this.startTimer = this.startTimer.bind(this);
        this.pauseResume = this.pauseResume.bind(this);
    }



    startTimer(time) {
        this.setState({ timeLeft: time });
        clearInterval(this.state.timer);

        let timer = setInterval( () => {
            var timeLeft = this.state.timeLeft-1;
            this.setState( { timeLeft: timeLeft });
            if ( 0===timeLeft || true===this.state.paused) {
                clearInterval(timer);
            }
        }, 1000);

    }

    pauseResume() {

        if ( this.state.paused == true ) {
            this.setState( { paused: false });
            this.startTimer(this.state.timeLeft);
            //resume counting
        } else {
            this.setState( { paused: true });
        }

    }


    render() {

        return (
            <div className={"row-fluid"}>
                <h1>Timer</h1>
                <div className={"btn-group"} role={"group"}>
                    <Buttons time={"5"} callback={this.startTimer}/>
                    <Buttons time={"10"} callback={this.startTimer}/>
                    <Buttons time={"15"} callback={this.startTimer}/>
                  <PauseButton callback={this.pauseResume} buttonText={this.state.paused?"Resume":"Pause"}></PauseButton>
                </div>
                <div>
                <DisplayLine timeLeft={this.state.timeLeft}/>
                </div>
            </div>

        )
    }

}


export default TimerWrapper;