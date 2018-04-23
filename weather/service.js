import axios from "axios";

// It works!

export const getWeatherFromNet = async id => {
  console.log("ewfewfewef");

  const URL = `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=02209aa59ed5efd0d2976605f455a257&units=metric`;
  //   const res = fetch(URL);
  const res = await axios(URL);
  console.log("ewfewfewef");
  return { res };
};

//   const cache = {}

//   export const getWeather = async name => {
//     let currentCity = cache[name]
//     const currentTime = Date()
//     if (!currentCity || currentCity.time > currentTime - 60000) {
//       currentCity = await getWeatherFromNet(name)
//       currentCity.time = currentTime
//       cache[name] = currentCity
//     }
//     return currentCity
//   }
