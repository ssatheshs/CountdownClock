import React from 'react' 
import './clock.css'

export default class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state={
            sec: '',
            minutes: '',
            hours: ''  
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            var today = new Date()
            var seconds = ( today.getSeconds() <= 9 )? '0' + today.getSeconds() : today.getSeconds()
            var minutes = ( today.getMinutes() <= 9 )? '0' + today.getMinutes() : today.getMinutes()
            var hours =  ( today.getHours() <= 9 )? '0' + today.getHours() : today.getHours()

            this.setState({
                sec: seconds,
                minutes: minutes,
                hours: hours
            })
            

        })

    }

    componentWillUnmount(){
        clearInterval( this.interval )
    }

    render(){
        const { sec, minutes, hours } = this.state
        return(
            <>
                <h1>Countdown Clock</h1>
                <div id="clockdiv">                
                <div>
                    <span class="hours">{ hours ? hours: '' }</span>
                    <div class="smalltext">Hours</div>
                </div>
                <div>
                    <span class="minutes">{ minutes ? minutes: ''}</span>
                    <div class="smalltext">Minutes</div>
                </div>
                <div>
                    <span class="seconds">{ sec ? sec: ''}</span>
                    <div class="smalltext">Seconds</div>
                </div>
                </div>
            </>
        )
    }
}