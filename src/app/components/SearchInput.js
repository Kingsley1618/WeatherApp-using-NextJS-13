'use client'
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import {useInput} from "@/hooks/useInput"
function SearchInput() {
const router = useRouter()

   const Val = useInput('')
  return (
    <div className="w-[100%] flex justify-center space-x-2">
        <input type="text" value = {Val.input} onChange = {Val.onChange} className="w-[100%] max-w-[600px] bg-white rounded-full outline-none shadow-3xl px-4 py-1" placeholder="Enter a Location"/>
    <button type="button" onClick = {()=> {
        router.push(`/${Val.input}`);
        Val.emptyInput()
        } } className="border-none px-3 bg-[black] text-white py-1 rounded-sm">Search</button>
    </div>
  )
}

export default SearchInput