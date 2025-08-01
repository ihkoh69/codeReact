import React, { useState } from 'react'
import { postAdd } from '../../api/todoApi';
import ResultModal from '../common/ResultModal';
import useCustomMove from '../../hooks/useCustomMove';

const initState = {
    title: '',
    writer: '',
    dueDate: ''
}

const AddComponent = () => {

    const [todo, setTodo] = useState(initState);

    const [result, setResult] = useState(null);

    const {moveToList} = useCustomMove();

    const handleChangeTodo = (e) => {
        const {name, value} = e.target;
        setTodo(prev => ({...prev, [name]: value}));
    }


    const handleClickAdd = () => {

        //console.log(todo)
        postAdd(todo)
        .then(res => {
            console.log('postAdd');
            console.log(res);

            setResult(res.TNO);
            setTodo({...initState});
        })
        .catch(e => {
            console.error(e);
        })
    }

    const closeModal = () => {
        console.log('close modal');
        setResult(null);
        moveToList();
    }

  return (
    <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
        {result ? <ResultModal title={'Add Result'} content={`New ${result} Added`} callbackFn={closeModal} /> : <></>}

        <div  className='flex justify-center'>
            <div className='w-1/5 p-6 text-right font-bold'>Title</div>
            <input className='w-4/5 p-6 border-2 border-gray-300 rounded' 
                    name='title'
                    type='text'
                    value={todo.title}
                    onChange={handleChangeTodo}
            />
        </div>
        <div  className='flex justify-center'>
            <div className='w-1/5 p-6 text-right font-bold'>Writer</div>
            <input className='w-4/5 p-6 border-2 border-gray-300 rounded' 
                    name='writer'
                    type='text'
                    value={todo.writer}
                    onChange={handleChangeTodo}

            />
        </div>
        <div  className='flex justify-center'>
            <div className='w-1/5 p-6 text-right font-bold'>DueDate</div>
            <input className='w-4/5 p-6 border-2 border-gray-300 rounded' 
                    name='dueDate'
                    type={'date'}
                    value={todo.dueDate}
                    onChange={handleChangeTodo}

            />
        </div>
        <div  className='flex justify-center'>
            <button type='button'
                    className='rounded p-4 w-36 bg-blue-500 text-white font-bold'
                    onClick={() => {handleClickAdd()}}
            >ADD</button>
        </div>


    </div>
  )
}

export default AddComponent