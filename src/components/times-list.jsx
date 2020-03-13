import React, { useState, useEffect } from 'react'
import firebase from '../firebase'


// Se crea un componente de función
const TimesList = () => {
    /* Se crea una función que por medio de los "hooks" contenga como variable el nombre de 
    la "colección" creada en firebase con su respectivo "setNombreDeColección" y el useState
    contendrá dentro de sus corchetes vacios todo lo que en esta colección se encuentre. */
    function useTimes() {
        const [times, setTimes] = useState([])
        
        /* Todo el contenido de "useEffect" sa agrega como parte del "hook" para que se conecte
        con firebase */
        useEffect(() => {
            
            const unsubscribe = firebase  //Para dejar de escuchar variale se ingresa "unsubscribe"
                .firestore()
                .collection('times')
                .onSnapshot((snapshot) => {
                    const newTimes = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
    
                    setTimes(newTimes)
                })
            return () => unsubscribe()
        }, [])
        return times
    }

    /*Aquí estamos llamando al hook */
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
                     {/* Aquí usamos la constante "times" que contiene toda la función "useTimes" 
                     y le asignamos como parametro (nuevo) time y con este parametro podremos llamar
                     a cada uno de los "fields" u objetos creados en firebase (ej. id, title etc) */}
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