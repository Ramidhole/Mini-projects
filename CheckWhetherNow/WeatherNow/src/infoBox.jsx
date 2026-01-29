import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import "./infobox.css"

export default function InfoBox({ info }) {
  const Rainy_Url =
    " https://images.unsplash.com/photo-1641970304221-48dc92c14daf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const COLD_Url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjH5ry5Dv4rys3KadWvVte38m8WE5jSegAQ&s"
  const HOT_Url =
    "https://media.istockphoto.com/id/2167039953/photo/summer-time-golden-wheat-field.jpg?s=612x612&w=0&k=20&c=ndg-1BdXKb46pYE3lEcetqIxTsql7eWb4b_NK84D5wE="

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity>80 
              ? Rainy_Url
              :info.temp>20
              ? HOT_Url
              :COLD_Url
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Min temp ={info.tempMin}&deg;C</p>
              <p>Max temp = {info.tempMax}&deg;C</p>
              <p>feels_like = {info.feelslike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
