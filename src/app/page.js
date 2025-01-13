import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { fetchCars } from "./server/cars";
import { Filter } from "./components/filter";

const modelYears = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

export default async function Home() {
  const carBrands = await fetchCars();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex gap-4 justify-content-center">
        <Image src={Logo} alt="site logo" width={60}/>
        <h2 className="text-3xl">Your<strong>Deal!</strong></h2>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <section>
          <h1 className="text-6xl font-bold text-white-800 text-center mb-4">Find your next Car!</h1>
          <h3>Select the Brand and the Year of the Model you are searching for.</h3>
        </section>
        <section className="flex align-self-center">
          <Filter carBrands={carBrands.Results} modelYears={modelYears}/>
        </section>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
