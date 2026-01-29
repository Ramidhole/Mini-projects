
import { useState } from "react"
import InfoBox from "./infoBox"
import SearchBox from "./SearchBox"
import "./WheatherApp.css"
export default function WheatherApp(){
const [weatherInfo, setWheatherInfo] = useState({
  city: "delhi",
  feelslike: 24.84,
  temp: 25.86,
  tempMin: 22,
  tempMax: 35,
  humidity: 44,
  weather: "haze",
});

let updateInfo = (newInfo)=>{
  setWheatherInfo(newInfo)
}

    return (
      <div className="wheatherapp">
        <h2>Search for the Weather </h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      </div>
    )
}