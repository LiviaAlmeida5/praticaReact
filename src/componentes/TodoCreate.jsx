import React, {useState} from 'react'

function TodoCreate({addTodo}) {
    const [value, setValue]= useState("");

    const handleSubmit =(e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value)
        setValue("");
    };

    return (
        <div className='input'>
            <form className='form' onSubmit={handleSubmit}>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Ex: Levar o lixo para a rua' />
                <button type='submit' id='butaoInput'>Adicionar tarefa</button>
            </form>
        </div>
    )
}

export default TodoCreate
