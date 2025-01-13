"use server"; 

export const fetchCars = async () => {
  const cars = await fetch(process.env.BASE_URL + "vehicles/GetMakesForVehicleType/car?format=json");
  return cars.json();
}

export const fetchModels = async (makeId, year) => {
  try {
    const models = await fetch (process.env.BASE_URL + `vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
    return models.json();
  } catch (err) {
    return Error(err);
  }
}