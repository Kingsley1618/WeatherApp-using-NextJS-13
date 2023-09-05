import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-24 px-3">
     <h1 className="font-bold text-[45px]">Welcome to the Weather App</h1>
     <div className="font-semibold">Discover the latest weather conditions for any location you&apos;re 
      curious about. Enter your desired location,
       and we&apos;ll provide you with up-to-date weather updates to keep you informed.</div>

       <ul className="mt-3 flex flex-col space-y-3">
        <li><span className="font-bold">Intuitive Interface</span>:Our clean and user-friendly design ensures 
          you can effortlessly navigate the app on any device.</li>
        <li><span className="font-bold">Real-time Data</span>: Through seamless integration with leading weather APIs, we deliver 
          accurate and current weather information for your chosen location.</li>

        <li><span className="font-bold">Stay Prepared</span>: Access vital weather details, including temperature, conditions, 
         and forecasts, all in one place.</li>
       </ul>

       <div className="mt-3">Experience the WeatherNow difference—stay informed and prepared with just a few clicks!</div>
    </main>
  )
}
