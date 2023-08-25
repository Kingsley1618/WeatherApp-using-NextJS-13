'use client'
import React,{useState} from 'react'

export function useInput() {
    const [input, setInput] = useState()

    function changeHandler(event) {
        setInput(event.target.value)
    }
    function inputChange () {
        setInput("")
    }
  return {
input,
onChange : changeHandler,
emptyInput : inputChange
  }
}
