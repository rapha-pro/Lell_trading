import fs from 'fs';
import { dummyDataStocks } from './dummyStocks';

type TrendingStock = {
    name: string;
    symbol: string;
    price: number;
    change: number;
    volume: number;
    marketCap: number;
  }
  
  type YahooFinanceResponse = {
    quotes: Array<{
      shortName: string;
      symbol: string;
      regularMarketPrice: number;
      regularMarketChangePercent: number;
      regularMarketVolume: number;
      marketCap: number;
    }>;
  }
  
  // File path to save the cached data
  const localStoragePath = 'trending_stocks_data';

  const YAHOO_FINANCE_API_KEY = process.env.NEXT_PUBLIC_YAHOO_FINANCE_API_KEY;

if (!YAHOO_FINANCE_API_KEY) {
  throw new Error('YAHOO_FINANCE_API_KEY is not defined in environment variables');
}
  
  const saveToCache = (stocks: TrendingStock[]) => {
    try {
      localStorage.setItem(localStoragePath, JSON.stringify(stocks, null, 4));
    } catch (error) {
      console.error('Error saving to cache:', error);
    }
  };
  
  const readFromCache = (): TrendingStock[] => {
    try {
      const data = localStorage.getItem(localStoragePath);
      console.log('==============Cached Trending Stocks:\n', data);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading cached data:', error);
      return [];
    }
  };
  
  const getTrendingStocks = async (): Promise<TrendingStock[]> => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': YAHOO_FINANCE_API_KEY,
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch('https://yh-finance.p.rapidapi.com/market/get-trending-tickers', options);
      const data: YahooFinanceResponse = await response.json();
  
      console.log("================Top 3 Trending Stocks:===========")
      console.log(data);
  
      // Get top 3 trending stocks
      const trendingStocks: TrendingStock[] = data.quotes
        .slice(0, 3)
        .map(stock => ({
          name: stock.shortName,
          symbol: stock.symbol,
          price: stock.regularMarketPrice,
          change: stock.regularMarketChangePercent,
          volume: stock.regularMarketVolume,
          marketCap: stock.marketCap
        }));
  
      saveToCache(trendingStocks);
      readFromCache();
  
      return trendingStocks;
  
    } catch (error) {
      console.error('Error fetching trending stocks data:', error);
  
      const cachedStocks = readFromCache();
      if (cachedStocks.length > 0) {
        console.log('Returning cached data::\n', cachedStocks);
        return cachedStocks;
      } else {
        console.log('No cached data available');
        
        console.log(dummyDataStocks);
        return dummyDataStocks;
      }
    }
  };
  
  const getTrendingUpdates = async (
    callback: (stocks: TrendingStock[]) => void,
    interval: number = 60000 // 1 minute, based on API plan limits
  ) => {
    const updateTrending = async () => {
      const stocks = await getTrendingStocks();
      callback(stocks);
    };
  
    await updateTrending();
    const intervalId = setInterval(updateTrending, interval);
    return () => clearInterval(intervalId);
  };
  

  export { getTrendingStocks, getTrendingUpdates, type TrendingStock };