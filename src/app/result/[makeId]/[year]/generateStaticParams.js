export const generateStaticParams = async () => {
  const response = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json");
  const carsData = response.json();

  const brands = carsData.Results.map(carBrand => carBrand.makeId);
  const modelYears = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  const paths = [];

  brands.forEach((brand) => {
    modelYears.forEach((year) => {
      paths.push({
        makeId: brand,
        year: year.toString,
      });
    });
  });

  return paths;
  
}