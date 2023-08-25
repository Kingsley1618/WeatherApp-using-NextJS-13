import React from 'react'

function Error({error}) {
  return (
    <div>
        <img src="/spongebob.png" className="w-[150px] h-[150px] block mx-auto" />
       <div className = "text-[40px] font-bold"> {error.cod}</div>
        <div className="font-semibold text-[20px]">{error.message}</div>
        </div>
  )
}

export default Error