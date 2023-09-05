import React from 'react'
import Error from "./Error"
import Image from "next/image"
import {weatherApi} from "@/utils/fetchUtils"

async function Box({location}) {
    const weather = await weatherApi(location)

  return (
    <>

    {!weather.message ? <div className="box w-[100%] items-center h-[300px] rounded-2xl max-w-[800px] grid grid-cols-2  justify-center block mx-auto px-3">
<Image width = {120} height = {120} src = {`https://openweathermap.org/img/w/${weather?.weather[0].icon}.png`} className="block mx-auto" alt="weatherImg"/>

<div className="block md:ml-0 mx-auto">
    <h1 className='font-normal'>Today</h1>

    <h1 className='font-bold text-[25px]'>{weather?.name}</h1>

<div className="text-[19px]">Temperature : {Math.floor(weather?.main.temp)}°C</div>
<div>{weather?.weather[0]?.description}</div>
</div>
    </div> : <Error error = {weather}/>}
    </>
  )
}

export default Box