import { useQuery } from "react-query";
import { fetchCoinData } from "../../services/fetchCoinData.js";
import { useState } from "react";

const CoinTable = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery(
    ["coins", page],
    () => fetchCoinData(page, "usd"),
    {
      // retry: 2,
      // retryDelay: 1000,
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="my-5 flex flex-col item-center justify-center gap-5 w-[80vw] mx-auto">
        <div className="w-full bg-blue-950 rounded-md text-black flex py-4 px-8 font-semibold items-center justify-center">
          {/* Header of the table */}
          <div className="basis-[35%] text-white">
            Coin
          </div>
          <div className="basis-[25%] text-white">
            Price
          </div>
          <div className="basis-[20%] text-white">
            24 Hr Change
          </div>
          <div className="basis-[20%] text-white">
            Market Cap
          </div>
        </div>

        <div className="flex flex-col w-[80vw] mx-auto">
          {data && data.map((coin) => {
            return(
              <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-4 font-semibold items-center justify-between">
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                    <div className="w-[4rem] h-[4rem]">
                      <img src={coin.image} alt={coin.name} className="w-full h-full"/>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-3xl">{coin.name}</div>
                      <div className="text-xl">{coin.symbol}</div>
                    </div>
                </div>
                <div className="basis-[25%]">
                  {coin.current_price}
                </div>
                <div className="basis-[20%]">
                  {coin.price_change_24h}
                </div>
                <div className="basis-[20%]">
                  {coin.market_cap}
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex gap-4 justify-center items-center">
            <button disabled={page === 1} onClick={()=>setPage(page-1)} className="btn w-36 btn-outline btn-primary">Prev</button>
             <button onClick={()=>setPage(page+1)} className="btn w-36 btn-outline btn-info">Next</button>
        </div>
      </div>
    </>
  );
};

export default CoinTable;
