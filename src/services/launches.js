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