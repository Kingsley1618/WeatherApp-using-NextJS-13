import React from 'react'
import {FiLoader} from "react-icons/fi"
function Loading() {
  return (
    <div className="w-full flex h-screen justify-center items-center text-[30px]"><FiLoader className="animate-spin"/></div>
  )
}

export default Loading