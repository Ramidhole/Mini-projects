import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "./SearchBox.css"
import { useState } from "react"

export default function SearchBox() {

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
