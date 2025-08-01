import React, { useEffect, useState } from 'react'
import { getOne } from '../../api/todoApi';
import useCustomMove from '../../hooks/useCustomMove';

const initState = {
    tno:0,
    title:'',
    writer:'',
    dueDate:null,
    complete: false
}

function ReadCompoent({tno}) {

    const [todo, setTodo] = useState(initState);

    const {moveToList, moveToModify} = useCustomMove();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await getOne(tno);
    //         setTodo(data);
    //     }
    //     fetchData();
    // }, [tno]);

    useEffect(() => {
        getOne(tno).then(data => {
            console.log(data);
            setTodo(data);
        })
    },[tno]);

  return (
    <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
        {makeDiv('Tno', todo.tno)}
        {makeDiv('Title', todo.title)}
        {makeDiv('Writer', todo.writer)}
        {makeDiv('Due Date', todo.dueDate)}
        {makeDiv('Complete', todo.complete ? 'Completed' : 'Not yet')}

        <div className='flex justify-end p-4'>
            <button type="button" 
                    className='rounded p-4 m-2 text-xl w-32 text-white bg-blue-500'
                    onClick={()=> moveToList()}
            >
                List
            </button>
            <button type="button" 
                    className='rounded p-4 m-2 text-xl w-32 text-white bg-blue-500'
                    onClick={()=> {
                        console.log("moveToModify tno:", tno);
                        moveToModify(tno)}}
            >
                Modify
            </button>
        
        </div>
    </div>
  )
}

const makeDiv = (title, value) => {
    return(
        <div>
            <div className='flex justify-center'>
                <div className='relative mb-4 flex w-full flex-wrap items-stretch'>
                    <div className='w-2/5 p-6 text-right font-bold'>{title}</div>
                    <div className='w-3/5 p-6 rounded-r border border-solde shadow-md'>{value}</div>
                </div>
            </div>
        
        </div>
    )
}

export default ReadCompoent