const Coins = ({ data }) => {
  return (
    <div className="overflow-x-auto  mx-auto relative shadow-md sm:rounded-lg">
      <table className="w-full lg:text-xl border text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm lg:text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* image col th */}
            <th scope="col" className="py-3 px-6" />
            <th scope="col" className="py-3 px-6">
              Coin
            </th>
            <th scope="col" className="py-3 px-6">
              symbol
            </th>
            <th scope="col" className="py-3 px-6">
              price
            </th>
            <th scope="col" className="py-3 px-6">
              24h
            </th>
            <th scope="col" className="py-3 px-6">
              Mkt Cap
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => {
            return (
              <tr
                key={coin.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-2 py-2 lg:py-4 lg:px-6">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-full sm:w-16 lg:w-10"
                  />
                </td>
                <td className="py-4 px-6">{coin.name}</td>
                <td className="py-4 px-6 uppercase">{coin.symbol}</td>
                <td className="py-4 px-6">
                  ${coin.current_price.toFixed(2).toLocaleString("en-IN")}
                </td>

                <td
                  className={`py-4 px-6 ${
                    coin.price_change_percentage_24h > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="py-4 px-6">
                  {coin.market_cap.toLocaleString("en-IN")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;
