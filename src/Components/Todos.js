import React from 'react';
import { useSelector } from 'react-redux';
import {Button} from 'react-bootstrap';

const Todos = () => {

    const selector = useSelector(state => state.todos.todos)
    console.log({selector})
    const showSelector = selector.map((select) =>{
        return(
            <div className= 'card' key= {select.id}>
                <h3 className='card-title text-center'>{select.title}</h3>
                <p className='card-body text-center'>{select.tasks}</p>
                <span className="d-flex justify-content-end">
            <p><Button className='btn btn-primary  mx-3 px-4'>Edit</Button></p> 
           <p>
            <Button className='btn btn-danger mx-3'>Delete</Button></p>
            </span>
                </div>
                )
                })


 return(
    <div className='card container'>
        <h1 className='card-header text-center text-$orange-400'>Todos Page and more</h1>

    <p className='card-body'>{showSelector}</p>
    </div>
 )
}

export default Todos;