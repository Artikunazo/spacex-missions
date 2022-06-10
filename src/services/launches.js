import config from '../config/config';

export async function getAllLaunches () {
  try {
    const response = await fetch(config.api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getLaunchByFlight(lightNumber) {
  try {
    const response = await fetch(config.api + flightNumbe);
    const data = response.json();
    return data;

  } catch (erro) { 
    console.error(error);
  }
}