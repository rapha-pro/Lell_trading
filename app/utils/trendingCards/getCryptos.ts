import fs from 'fs';
import { dummyDataCoins } from './dummyDataCoins';

type TrendingCoin = {
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: number;
  thumb: string;
}

type CoinGeckoTrendingResponse = {
  coins: Array<{
    item: {
      name: string;
      symbol: string;
      thumb: string;
      data: {
        price: number;
        price_change_percentage_24h: {
          usd: number;
        };
        total_volume: string;
      };
    };
  }>;
}

// File path to save the cached data
const localStoragePath = 'trending_crypto_data';

const saveToCache = (coins: TrendingCoin[]) => {
	try {
	  localStorage.setItem(localStoragePath, JSON.stringify(coins, null, 4));
	} catch (error) {
	  console.error('Error saving to cache:', error);
	}
  };
  
  const readFromCache = (): TrendingCoin[] => {
	try {
	  const data = localStorage.getItem(localStoragePath);
	  console.log('==============Cached Trending Cryptocurrencies:\n', data);
	  return data ? JSON.parse(data) : [];
	} catch (error) {
	  console.error('Error reading cached data:', error);
	  return [];
	}
  };
  

const getTrendingCryptos = async (): Promise<TrendingCoin[]> => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending', {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    });

    const data: CoinGeckoTrendingResponse = await response.json();

    // log the data to check the response
    console.log("================Top 3 Trending Cryptocurrencies:===========")
    console.log(data)
    
    // Get top 3 trending coins
    const trendingCoins: TrendingCoin[] = data.coins
      .slice(0, 3)
      .map(coin => ({
        name: coin.item.symbol.toUpperCase(),
        symbol: coin.item.symbol.toUpperCase(),
        price: parseFloat(coin.item.data.price.toString()),
        change: coin.item.data.price_change_percentage_24h.usd,
        volume: parseFloat(coin.item.data.total_volume.replace(/[^0-9.-]+/g, '')),
        thumb: coin.item.thumb
      }));

    saveToCache(trendingCoins);
    readFromCache();

    return trendingCoins;

  } catch (error) {
    console.error('Error fetching trending crypto data:', error);


    const cachedCoins = readFromCache();
    if (cachedCoins.length > 0) {
      console.log('Returning cached data::\n', cachedCoins);
      return cachedCoins;
    } else {
      console.log('No cached data available');
      return dummyDataCoins;
    }
  }
};


const getTrendingUpdates = async (
	callback: (cryptos: TrendingCoin[]) => void,
	interval: number = 600000 // 10 minutes as per API documentation
) => {
	const updateTrending = async () => {
		const cryptos = await getTrendingCryptos();
		callback(cryptos);
	};

	await updateTrending();
	const intervalId = setInterval(updateTrending, interval);
  	return () => clearInterval(intervalId);
};

export { getTrendingCryptos, getTrendingUpdates, type TrendingCoin };