'use client'
import React from 'react'
import Box from '../components/Box'
import { Suspense } from "react";
import Loading from "../loading"

function page({params}) {
    
  return (
    <div className="flex flex-col justify-center w-[100%] h-[500px] items-center">
<Suspense fallback = {<Loading />}><Box location = {params.location}/></Suspense>

    </div>
  )
}

export default page