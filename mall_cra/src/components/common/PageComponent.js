import React from 'react'

const PageComponent = ({serverData, movePage}) => {
  return (
    <div className='m-6 flex justify-center'>
        {serverData.prev ? 
            <div className='m-2 p-2 w-16 text-center font-bold text-blue-400'
                onClick={()=>{
                    movePage({page: serverData.prevPage})                    
                }}
            >
                Prev
            </div> 
            : <></>}
        {serverData.pageNumList.map(pageNum => {
            return (
                <>
                    <div key={pageNum}
                        className={`m-2 p-2 w-12 text-center rounded shadow-md text-black 
                                     ${serverData.cureent === pageNum ? 'bg-gray-500' : 'bg-bule-500'}`}
                        onClick={()=>{
                            movePage({page:pageNum})
                        }}
                    >
                        {pageNum}
                    </div>
                </>
            )
        })}

        {serverData.next ? 
                            <div className='m-2 p-2 w-16 text-center font-bold text-blue-400'
                onClick={()=>{
                    movePage({page: serverData.nextPage})                    
                }}
            >
                Next
            </div> 
            : <></>}
    
    </div>
  )
}

export default PageComponent