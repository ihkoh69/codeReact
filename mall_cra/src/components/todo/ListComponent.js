import React, { useEffect, useState } from 'react'
import useCustomMove from '../../hooks/useCustomMove';
import { getList } from '../../api/todoApi';
import PageComponent from '../common/PageComponent';

const initState = {
    dtoList:[],
    pageNumList:[],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}

const ListComponent = () => {

    const {page, size, refresh, moveToList, moveToRead} = useCustomMove();

    const [serverData, setServerData] = useState(initState);
    useEffect(()=>{
        getList({page, size}).then(data => {
            console.log(data)
            setServerData(data)
        })
    },[page, size, refresh]);

  return (
    <div className='border-2 border-blue-100 mt-10 mr-2 ml-2'>
        <div className='flex flex-wrap mx-auto justify-center p-6'>
            {serverData.dtoList.map(todo => {
                return ( 
                    <>
                        <div key = {todo.tno}
                        className='w-full min-w-[400px] p-2 m-2 rounded shadow-md '>
                            <div className='flex' onClick={()=>{moveToRead(todo.tno)}} >
                                <div className='font-extrabold text-2xl p-2 w-2/12'>
                                    {todo.tno}
                                </div>
                                <div className='text-1xl p-2 w-6/12'>
                                    {todo.title}
                                </div>                                
                                <div className='text-1xl p-2 w-4/12'>
                                    {todo.dueDate}
                                </div>
                            </div>
                      
                        </div>
                    </>
                )

            })}



        </div>
        <PageComponent serverData={serverData} movePage={moveToList} />
    </div>
  )
}

export default ListComponent