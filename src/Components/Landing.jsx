import React, { useEffect, useState } from "react";
// api
import { GetData } from "./../Services/Api";
// components
import Coins from "./Coins";
import Loading from "./Loading";
import Search from "./Search";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [searchCoins, setSearchCoins] = useState("");

  useEffect(() => {
    const FetchData = async () => {
      const data = await GetData();
      setCoins(data);
    };
    FetchData();
  }, []);

  //   search input change handler
  const searchHandler = (e) => {
    setSearchCoins(e.target.value);
  };
  //   search filter
  const searchConisRes = coins.filter((item) =>
    item.name.toLowerCase().includes(searchCoins.toLowerCase())
  );

  return (
    <div className="container mt-10">
      <Search searchCoins={searchCoins} searchHandler={searchHandler} />
      {coins.length ? <Coins data={searchConisRes} /> : <Loading />}
    </div>
  );
};

export default Landing;
