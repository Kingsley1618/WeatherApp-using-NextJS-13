import React from 'react'
import Image from "next/image"
function Error({error}) {
  return (
    <div>
        <Image width = {150} height = {150} src="/spongebob.png" className="block mx-auto" alt="errorImg"/>
       <div className = "text-[40px] font-bold"> {error.cod}</div>
        <div className="font-semibold text-[20px]">{error.message}</div>
        </div>
  )
}

export default Error