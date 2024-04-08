import React from 'react'

function Body() {
  return (
    <>
<div className="p-10">
  <div className="flex justify-center gap-80 px-10">
    <span className="font-bold text-medium">Welcome to the contact section</span>
    <button id="btn" className="border-r text-center bg-black text-white rounded-md w-20 h-12">Add New</button>
  </div>
</div>

<div id="container" className="flex justify-center gap-80 px-10 space-x-8 bg-slate-400 p-6">
  <div>
    Uwera Anick<br></br>
    0726548043
  </div>
  <div>
    ...<br></br>
    anickyuwera@gmail.com
  </div>
</div>

<div className="card bg-slate-400 my-4">
  <div className="flex justify-center p-6 gap-16">
    <div>
      Uwera Anick<br></br>
      0726548043
    </div>
    <div>
      ...<br></br>
      anickyuwera@gmail.com
    </div>
  </div>
</div>

<div className="card bg-slate-400 my-4">
  <div className="flex justify-center p-6 gap-16">
    <div>
      Uwera Anick<br></br>
      0726548043
    </div>
    <div>
      ...<br></br>
      anickyuwera@gmail.com
    </div>
  </div>
</div>

    </>
   
   
  )
}

export default Body
