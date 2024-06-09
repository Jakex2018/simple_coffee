/* eslint-disable react-hooks/rules-of-hooks */
import "./App.css";
import { useState } from "react";
import CoffeText from "./components/CoffeText.jsx";
import CoffeButtons from "./components/coffeButtons.jsx";
import CoffeItems from "./components/coffeItems.jsx";
import useCoffeeData from "./hook/customHook.jsx";
function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(true);
  const { data } = useCoffeeData();
  const showAvailable = async () => {
    const filteredDocs = data.filter((item) => item.available === true);
    console.log(filteredDocs);
    setFilteredData(filteredDocs);
    setShowAllProducts(false);
  };
  const showAll = () => {
    setShowAllProducts(true);
  };

  return (
    <div className=" xl:h-[200vh] sm:h-[400vh] md:h-[290vh] w-full bg-[#111315] relative">
      <img src="/bg-cafe.jpg" alt="" className="h-[30vh] w-full object-cover" />
      <div className="bg-[#1B1D1F] xl:h-[1000px] lg:h-[1350px]  md:h-[1350px]  sm:h-[1900px] xl:w-[1150px] md:w-[650px] sm:w-[350px]  absolute top-[6%] xl:left-[7%] md:left-[7%] lg:left-[18%] sm:left-[24%] sm:right-[6.8%] rounded-md">
        <img
          src="/vector.svg"
          className="absolute top-[1%] right-[20%] opacity-50"
          alt=""
        />
        <div className="flex flex-col items-center justify-center">
          <CoffeText />
          <CoffeButtons showAll={showAll} showAvailable={showAvailable} />
          <CoffeItems
            data={data}
            filteredData={filteredData}
            showAllProducts={showAllProducts}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
