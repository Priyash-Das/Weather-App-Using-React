import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SunnyIcon from "@mui/icons-material/Sunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  // const INIT_URL = "https://www.bigcountryhomepage.com/wp-content/uploads/sites/56/2019/11/Weather-v2-1.jpg?w=640";

  let SUNNY_URL =
    "https://www.pittsburghmagazine.com/content/uploads/2024/08/r/h/hot-day-sky-clouds-sun-shutterstock.jpg";
  let COLD_URL =
    "https://progradedigital.com/wp-content/uploads/2022/02/featured-image-winter-photography-101-622x415-01.jpg";
  let RAIN_URL =
    "https://t3.ftcdn.net/jpg/09/80/53/36/360_F_980533638_WbW7TrMtEhmosYWi9fdGOpRJu7jpcaAO.jpg";

  return (
    <div className="InfoBox">
      <Card
        sx={{ maxWidth: 500, width: "100%", borderRadius: 4, boxShadow: 3 }}
      >
        <CardMedia
          sx={{ height: 160 }}
          image={
            info.humidity > 80
              ? RAIN_URL
              : info.temp > 15
              ? SUNNY_URL
              : COLD_URL
          }
          title="weather image"
        />
        <CardContent sx={{ p: 3 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            textAlign="center"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            {info.city}, {info.country}
          </Typography>
          <Typography>
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography
            variant="p"
            textAlign="center"
            sx={{
              color: "text.secondary",
              textTransform: "capitalize",
            }}
          >
            {info.weather}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              {info.temp}°C
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <ThermostatIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">
                  <strong>Feels like:</strong> {info.feelsLike}°C
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <ThermostatIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">
                  <strong>Min Temp:</strong> {info.tempMin}°C
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ThermostatIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">
                  <strong>Max Temp:</strong> {info.tempMax}°C
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <WaterDropIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">
                  <strong>Humidity:</strong> {info.humidity}%
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <AirIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">
                  <strong>Wind:</strong> {info.windSpeed} m/s
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <VisibilityIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">
                  <strong>Visibility:</strong> {info.visibility / 1000} km
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
