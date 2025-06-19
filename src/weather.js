const API_KEY = 'YOUR_REAL_API_KEY'; // Replace this

export async function fetchWeatherData(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) throw new Error('Weather data not found');
  return response.json();
}
export function processWeatherData(data) {
  return {
    name: data.name,
    description: data.weather[0].description,
    temp: data.main.temp
  };
}
