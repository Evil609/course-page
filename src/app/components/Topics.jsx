import React from 'react'
function Topics() {

return (
  <div className="p-4 w-full md:w-1/3 xl:w-2/5 pt-10">
    <p className='text-3xl font-bold pb-5 md:pb-20'>Topics For This Course</p>
    <div className="w-full h-2 bg-gray-500 rounded-sm overflow-hidden">
      <div style={{width: "80%"}} className="h-full rounded-sm transition-all duration-300 bg-green-400"></div>
      <div className="bg-gray-300 h-5 w-5 rounded-full z-10 "></div>
    </div>
  </div>
)
}

export default Topics