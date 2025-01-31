import PropTypes from "prop-types";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiDaySprinkle,
  WiNightShowers,
  WiDayRain,
  WiNightRain,
  WiThunderstorm,
  WiNightThunderstorm,
  WiDaySnow,
  WiNightSnow,
  WiDayFog,
  WiNightFog,
} from "react-icons/wi";

// const weatherBackgrounds = {
//   "01d": "url('./backgrounds/clear-sky-day.jpg')", // Sunny day
//   "01n": "url('/backgrounds/clearnight.jpg')", // Clear night
//   "02d": "url('/backgrounds/few-clouds-day.jpg')", // Few clouds (day)
//   "02n": "url('/backgrounds/fewcloudsnight.jpg')", // Few clouds (night)
//   "03d": "url('/backgrounds/scattereddday.jpg')", // Scattered clouds
//   "03n": "url('/backgrounds/scatterednight.jpg')", // Scattered clouds
//   "04d": "url('/backgrounds/broken-clouds.jpg')", // Broken clouds
//   "04n": "url('/backgrounds/broken-clouds.jpg')", // Broken clouds
//   "09d": "url('/backgrounds/showerrain.jpg')", // Shower rain
//   "09n": "url('/backgrounds/showerrain.jpg')", // Shower rain
//   "10d": "url('/backgrounds/rain.jpg')", // Rain (day)
//   "10n": "url('/backgrounds/rain day.jpg')", // Rain (night)
//   "11d": "url('/backgrounds/thunderstorm.jpg')", // Thunderstorm
//   "11n": "url('/backgrounds/thunderstorm.jpg')", // Thunderstorm
//   "13d": "url('/backgrounds/snow.jpg')", // Snow
//   "13n": "url('/backgrounds/snow.jpg')", // Snow
//   "50d": "url('/backgrounds/mist.jpg')", // Mist
//   "50n": "url('/backgrounds/mist.jpg')", // Mist
//   default: "url('/backgrounds/default.jpg')", // Default background
// };

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return <p>No weather data available. Please search for a city.</p>;
  }
  //   const backgroundStyle = {
  //     backgroundImage:
  //       weatherBackgrounds[weather?.weather[0]?.icon] ||
  //       weatherBackgrounds.default,
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //     minHeight: "100vh", // Ensure the background covers the entire viewport
  //     padding: "20px",
  //   };
  // Determine the weather icon based on the weather code
  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
        return <WiDaySunny />;
      case "01n":
        return <WiNightClear />;
      case "02d":
        return <WiDayCloudy />;
      case "02n":
        return <WiNightAltCloudy />;
      case "03d":
        return <WiDayCloudy />;
      case "03n":
        return <WiNightAltCloudy />;
      case "04d":
        return <WiDayCloudy />;
      case "04n":
        return <WiNightAltCloudy />;
      case "09d":
        return <WiDaySprinkle />;
      case "09n":
        return <WiNightShowers />;
      case "10d":
        return <WiDayRain />;
      case "10n":
        return <WiNightRain />;
      case "11d":
        return <WiThunderstorm />;
      case "11n":
        return <WiNightThunderstorm />;
      case "13d":
        return <WiDaySnow />;
      case "13n":
        return <WiNightSnow />;
      case "50d":
        return <WiDayFog />;
      case "50n":
        return <WiNightFog />;
      default:
        return null;
    }
  };

  const weatherIcon = getWeatherIcon(weather.weather[0].icon);

  return (
    <div /*style={backgroundStyle}*/>
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <div>{weatherIcon}</div> {/* Render the weather icon here */}
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export default WeatherCard;
