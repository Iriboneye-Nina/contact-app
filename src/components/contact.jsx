import React from 'react'


function Contact() {
  return (
  <div id='creat' className='flex justify-center flex-direction: column; p-9 gap-80'>
   <div class="flex flex-col">
  <div class="mb-4">
    <h3 class="text-lg font-bold">Uwera Anick</h3>
  </div>
  <div class="mb-2">
    <span class="text-sm font-semibold">Email:</span>
    <span>uweraanick@gmail.com</span>
  </div>
  <div class="mb-2">
    <span class="text-sm font-semibold">Phone:</span>
    <span>078389201</span>
  </div>
  <div class="mb-2">
    <span class="text-sm font-semibold">Created on:</span>
    <span>sat 17feb 2024</span>
  </div>
  <div>
    <span class="text-sm font-semibold">Updated on:</span>
    <span>tues 20march 2024</span>
  </div>
</div>

<div id="button" className="space-x-4">
  <button id="btn" className="bg-black text-white py-2 px-4 rounded">Update</button>
  <button id="btns" className="bg-red-500 text-white py-2 px-4 rounded">Delete</button>
</div>

    </div>
  )
}

export default Contact;
