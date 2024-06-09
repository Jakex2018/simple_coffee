import { useEffect } from "react";

import { useState } from "react";

const useCoffeeData = () => {
  const [data, setData] = useState([]);

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
  return {
    data
  };
};

export default useCoffeeData;
