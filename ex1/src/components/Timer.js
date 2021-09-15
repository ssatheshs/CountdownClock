
import React, { useEffect } from 'react' 
import './clock.css'

const Timer = () => {

    const [sec, setSec] = React.useState('')
    const [minutes, setMinutes] = React.useState('')
    const [hours, setHours] = React.useState('')

    useEffect(() =>{
        const interval = setInterval(() => {
            var today = new Date()
            var seconds = ( today.getSeconds() <= 9 )? '0' + today.getSeconds() : today.getSeconds()
            var minutes = ( today.getMinutes() <= 9 )? '0' + today.getMinutes() : today.getMinutes()
            var hours =  ( today.getHours() <= 9 )? '0' + today.getHours() : today.getHours()

            setHours(hours)
            setMinutes(minutes)
            setSec(seconds)
     
        })

        return () => {
            clearInterval(interval)
        }

    })

  
    return(
        <>
            <h1>Countdown Clock</h1>
            <div id="clockdiv">                
            <div>
                <span class="hours">{ hours }</span>
                <div class="smalltext">Hours</div>
            </div>
            <div>
                <span class="minutes">{ minutes }</span>
                <div class="smalltext">Minutes</div>
            </div>
            <div>
                <span class="seconds">{ sec }</span>
                <div class="smalltext">Seconds</div>
            </div>
            </div>
        </>
    )
    
}

export default Timer