import { API_URL } from "../config/config";

export async function getLaunches() {
  try {
    const response = await fetch(API_URL + 'launches');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getLaunchById(id) {
  try {
    const response = await fetch(API_URL + 'launches/' + id);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

