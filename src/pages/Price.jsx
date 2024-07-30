import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Price = () => {
  const params = useParams();
  const symbol = params.symbol;
  const apiKey = import.meta.env.VITE_API_KEY;

  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(coin);

  const getCoin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setCoin(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <div>
      <h1>
        {coin.asset_id_base} / {coin.asset_id_quote}
      </h1>
      <h2>{coin.rate}</h2>
    </div>
  );
};

export default Price;
