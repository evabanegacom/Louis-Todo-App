import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import {useState} from 'react';
import {Button} from 'react-bootstrap';

const Home = () => {
    
const selector = useSelector(state => state.todos.todos)
console.log({selector})
const showSelector = selector.map((select) =>{
    return(
        <div className= 'card' key= {select.id}>
            <h3 className='card-title text-center'>{select.title}</h3>
            <p className='card-body text-center'>{select.tasks}</p>
            <span className="d-flex justify-content-end">
            <p><Button className='btn btn-primary  mx-3 px-4' onClick={()=>{handlEdit(select.id, select.title, select.tasks)}}>Edit</Button></p> 
           <p>
            <Button className='btn btn-danger mx-3' onClick={()=>{handleDelete(select.id)}}>Delete</Button></p>
            </span>
             
        </div>
    )
}
)

const dispatch = useDispatch()

const addTodo = (todo) => dispatch({type: 'ADD_TODO', todos: todo})
const handleDelete = (id) => {dispatch({type: 'DELETE_TODO', id: id})}


const [ todo, setTodo ] = useState({
    id: '',
    title: '',
    tasks: ''
})


const handleChange = (e) => {
    setTodo({
        ...todo,
    [e.target.id]: e.target.value,
    id: Math.random()
})
}



 


 const [editMode, setEditMode] = useState(false);
 const [edit, setEdit] = useState({
     id: '',
     title: '',
     tasks: ''
 });
 
 const handlEdit = (id, title, tasks) => {
     setEditMode(true);
     setEdit({
         id: id,
         title: title,
         tasks: tasks
     });
 };
 
 const handleEditChange = (e) => {
     setEdit({
         ...edit,
         [e.target.id]: e.target.value
     });
 };
 
 const handleSubmit = (e) => {
     e.preventDefault();
 
     if (editMode) {
         // Dispatch edit action
         dispatch({
             type: 'EDIT_TODO',
             id: edit.id,
             title: edit.title,
             tasks: edit.tasks
         });
         setEditMode(false);
     } else {
         // Dispatch create action
         addTodo({
             id: Math.random(),
             title: todo.title,
             tasks: todo.tasks
         });
     }
 
     // Clear form
     document.querySelector('form').reset();
     setTodo({
         id: '',
         title: '',
         tasks: ''
     });
 };

 const isValidate =() =>{ 
    if (editMode) {
   return edit.title ==='' || edit.tasks ===''; 
}else{
    return todo.title === '' || todo.tasks === ''
}}

 
    return (
        <div>
            <h1 className='text-primary text-center'>Todo's</h1>
            <p className='container'>{showSelector}</p>
            

            <form className='container' onSubmit={handleSubmit}>
    <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input
            type='text'
            className='form-control'
            id='title'
            placeholder='Enter Title'
            value={editMode ? edit.title : todo.title}
            onChange={editMode ? handleEditChange : handleChange}
        />
    </div>
    <div className='form-group'>
        <label htmlFor='tasks'>Tasks</label>
        <input
            type='text'
            className='form-control'
            id='tasks'
            placeholder='Enter Tasks'
            value={editMode ? edit.tasks : todo.tasks}
            onChange={editMode ? handleEditChange : handleChange}
        />
    </div>
    <button type='submit' className='btn btn-warning' disabled = {isValidate()}>
        {editMode ? 'Update' : 'Submit'}
    </button>
</form>
            
        </div>
    )
}

export default Home

