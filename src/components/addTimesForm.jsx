import React from 'react'

const AddTimesForm = () => {
    return (
        <form>
            <div>
                <label>Titulo</label>
                <input type='text'></input>
            </div>
            <div>
                <label>Tiempo</label>
                <input type='number'></input>
            </div>
            <button>Agregar tiempo</button>           

        </form>
    )
}
export default AddTimesForm