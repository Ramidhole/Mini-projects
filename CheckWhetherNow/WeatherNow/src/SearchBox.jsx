import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "./SearchBox.css"
import { useState } from "react"

export default function SearchBox() {
  const API_URL ="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "0f7d7ef167a7c22215189a069fc7923b";

  let[city,setCity]=useState("");

  let handleChange =(evt)=>{
    setCity(evt.target.value);
  };

  let handleSubmit=(evt)=>{
    evt.preventDefault();
    console.log(city);
    setCity("");
  };

  return (
    <div className="search">
      <h1>Search for weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField label="City Name" variant="outlined" id="city" required value={city} onChange={handleChange} />
        <br /><br />
        <Button variant="contained" >Search</Button>
      </form>
    </div>
  )
}
