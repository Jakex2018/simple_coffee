import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const coffee = await response.json();
      setData(coffee);
    };

    fetchData();
  }, []);

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
          <div className="text-white text-center flex flex-col justify-center items-center mt-[70px]">
            <h1 className="dm-sans-700 text-[30px] mb-4">Our Collection</h1>
            <p className="text-gray-600 dm-sans-300 w-3/6">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
          <div className="flex gap-3 mt-5">
            <button
              onClick={showAll}
              className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md bg-[#6F757C] px-6 font-medium text-neutral-200 transition "
            >
              <span>All Products</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
            <button
              onClick={showAvailable}
              className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200 transition "
            >
              <span>Available Now</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </div>
          <div className="container mx-auto xl:h-[600px]  md:h-[900px] xl:w-[1000px] md:w-[550px] gap-[50px] mt-[60px]  xl:flex xl:flex-wrap md:grid md:grid-cols-2 sm:ml-[15%] lg:ml-[8%] md:ml-[9%] xl:ml-[7%]">
            {showAllProducts
              ? data.map((item) => (
                  <div
                    key={item.key}
                    className="xl:w-[300px] sm:w-[260px] xl:h-[200px] sm:h-[300px]"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        className="w-[300px] h-[170px]  object-cover  rounded-[30px]"
                        alt=""
                      />
                      {item.popular ? (
                        <div className="bg-[#F6C768] px-4 rounded-md cursor-pointer absolute top-[5%] left-[5%]">
                          <span className="dm-sans-700 text-[13px] text-black">
                            Popular
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex justify-between mt-5">
                      <span className="text-white dm-sans-500">
                        {item.name}
                      </span>
                      <div className="bg-[#BEE3CC] px-4 rounded-md">
                        <span className="dm-sans-700">{item.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <img src="/Star_fill.svg" alt="" />
                      <div className="flex gap-[25px]">
                        <span className="text-white dm-sans-700">
                          {item.rating}{" "}
                          <span className="text-gray-500">
                            ({item.votes} votes)
                          </span>
                        </span>
                        {item.available ? (
                          ""
                        ) : (
                          <span className=" dm-sans-700 text-[#ED735D]">
                            Sold out
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              : filteredData.map((item) => (
                  <div key={item.key} className="xl:w-[300px] sm:w-[260px] xl:h-[200px] sm:h-[300px]">
                    <div className="relative">
                      <img
                        src={item.image}
                        className="w-[300px] h-[170px]  object-cover  rounded-[30px]"
                        alt=""
                      />
                      {item.popular ? (
                        <div className="bg-[#F6C768] px-4 rounded-md cursor-pointer absolute top-[5%] left-[5%]">
                          <span className="dm-sans-700 text-[13px] text-black">
                            Popular
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex justify-between mt-5">
                      <span className="text-white dm-sans-500">
                        {item.name}
                      </span>
                      <div className="bg-[#BEE3CC] px-4 rounded-md">
                        <span className="dm-sans-700">{item.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <img src="/Star_fill.svg" alt="" />
                      <div className="flex gap-[25px]">
                        <span className="text-white dm-sans-700">
                          {item.rating}{" "}
                          <span className="text-gray-500">
                            ({item.votes} votes)
                          </span>
                        </span>
                        {item.available ? (
                          ""
                        ) : (
                          <span className=" dm-sans-700 text-[#ED735D]">
                            Sold out
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
