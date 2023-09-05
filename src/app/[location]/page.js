'use client'
import React from 'react'
import Box from '../components/Box'

import Loading from "./loading"

function page({params}) {
    
  return (
    <div className="flex flex-col justify-center w-[100%] h-[500px] items-center">
<Box location = {params.location}/>

    </div>
  )
}

export default page