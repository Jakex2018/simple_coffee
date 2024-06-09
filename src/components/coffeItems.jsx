const coffeItems = ({ showAllProducts, data, filteredData }) => {
  return (
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
                <span className="text-white dm-sans-500">{item.name}</span>
                <div className="bg-[#BEE3CC] px-4 rounded-md">
                  <span className="dm-sans-700">{item.price}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img src="/Star_fill.svg" alt="" />
                <div className="flex gap-[25px]">
                  <span className="text-white dm-sans-700">
                    {item.rating}{" "}
                    <span className="text-gray-500">({item.votes} votes)</span>
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
                <span className="text-white dm-sans-500">{item.name}</span>
                <div className="bg-[#BEE3CC] px-4 rounded-md">
                  <span className="dm-sans-700">{item.price}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img src="/Star_fill.svg" alt="" />
                <div className="flex gap-[25px]">
                  <span className="text-white dm-sans-700">
                    {item.rating}{" "}
                    <span className="text-gray-500">({item.votes} votes)</span>
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
  );
};

export default coffeItems;
