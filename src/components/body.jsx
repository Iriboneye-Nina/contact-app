import React from 'react'

function Body() {
  return (
    <>
     <div className='p-10'>
     <div className='flex justify-center gap-80 px-10'>
      <span className='font-bold size-medium'>Welcome to contact section </span>
      <button id='btn' className='border-r text-center bg-black text-white rounded-md w-20 h-12'>Add New</button>
      </div>
    </div>
    <div id='container' className='flex justify-center gap-80 px-10 bg-slate-400 w-100 h-12'>
      <div>
        Uwera Anick<br></br>
        0726548043
      </div>
      <div>
        ...<br></br>
        anickyuwera@gmail.com
      </div>
    </div>
    <div id='container2' className='flex justify-center p-10 gap-80 bg-slate-200'>
    <div>
        Uwera Anick<br></br>
        0726548043
      </div>
      <div>
        ...<br></br>
        anickyuwera@gmail.com
      </div>
    </div>
    <div id='container2' className='flex justify-center p-10 gap-80 bg-slate-200'>
    <div>
        Uwera Anick<br></br>
        0726548043
      </div>
      <div>
        ...<br></br>
        anickyuwera@gmail.com
      </div>
    </div>
    </>
   
   
  )
}

export default Body
