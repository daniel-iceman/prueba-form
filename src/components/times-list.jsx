import React, { useState, useEffect } from 'react'
import firebase from '../firebase'



const TimesList = () => {

    function useTimes() {
        const [times, setTimes] = useState([])
    
        useEffect(() => {
            firebase
                .firestore()
                .collection('times')
                .onSnapshot((snapshot) => {
                    const newTimes = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
    
                    setTimes(newTimes)
                })
        }, [])
        return times
    }



    const times = useTimes()
    return (
        <div>
            <h2>Times List</h2>
            <div>
                <label>Sort By:</label>{''}
                <select>
                    <option>1. Más rápido</option>
                    <option>2. Más lento</option>
                    <option disabled>---</option>
                    <option>4. De A a Z</option>
                    <option>5. De Z a A</option>
                </select>

                <ol>
                    {times.map((time) =>
                    <li key={time.id}>
                        <div className = "time-entry">
                            {time.title}
                            <code className = "time">{time.time_seconds} seconds </code>
                        </div>
                    </li>
                    )}
                   {/* <li>
                        <div className='time-entry' >Opcion 1
                            <code className='time' >16 segundos</code>
                        </div>
                    </li>
                    <li>
                        <div className='time-entry' >Opcion 2
                            <code className='time' >24 segundos</code>
                        </div>
                    </li>
                    <li>
                        <div className='time-entry' >Opcion 3
                            <code className='time' >5 segundos</code>
                        </div>
                    </li>
                    <li>
                        <div className='time-entry' >Opcion 4
                            <code className='time' >38 segundos</code>
                        </div>
                    </li>*/}
                </ol>
            </div>
        </div>
    )
}

export default TimesList