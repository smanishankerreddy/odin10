import './style.css';
import { fetchWeatherData, processWeatherData } from './weather';

const form = document.getElementById('locationForm');
const input = document.getElementById('locationInput');
const display = document.getElementById('weatherDisplay');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = input.value.trim();
  if (!location) return;

  display.textContent = 'Loading...';

  try {
    const data = await fetchWeatherData(location);
    console.log(data); // Just to check raw output
    const weather = processWeatherData(data);
    display.innerHTML = `
      <h2>${weather.name}</h2>
      <p>${weather.description}</p>
      <p>Temp: ${weather.temp}°C</p>
    `;
  } catch (error) {
    display.textContent = 'Failed to fetch weather data.';
    console.error(error);
  }
});
