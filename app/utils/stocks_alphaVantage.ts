type StockData = {
	name: string;
	company: string;
	price: number;
	change: number;
	volume: number;
  }
  
  type AlphaVantageStock = {
	ticker: string;
	price: string;
	change_amount: string;
	change_percentage: string;
	volume: string;
  }
  
  const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
  
  const getTopStocks = async (): Promise<StockData[]> => {
	const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`;
  
	try {
	  const response = await fetch(url);
	  const data = await response.json();

	  console.log(data);
	  
	  // Get top 3 most actively traded stocks
	  const topStocks = await Promise.all(
		data.top_gainers
		  .slice(0, 3)
		  .map(async (stock: AlphaVantageStock) => {
			// Get company overview
			const overviewUrl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stock.ticker}&apikey=${API_KEY}`;
			const overviewResponse = await fetch(overviewUrl);
			const overviewData = await overviewResponse.json();
  
			return {
			  name: stock.ticker,
			  company: stock.ticker,
			  price: parseFloat(stock.price),
			  change: parseFloat(stock.change_percentage.replace('%', '')),
			  volume: parseInt(stock.volume)
			};
		  })
	  );
  
	  return topStocks;
  
	} catch (error) {
	  console.error('Error fetching stock data:', error);
	  return [
		{ 
		  name: 'NVDA', 
		  company: 'NVIDIA Corporation', 
		  price: 140.22, 
		  change: 0.3938,
		  volume: 104965758 
		},
		{ 
		  name: 'TSLA', 
		  company: 'Tesla, Inc.', 
		  price: 462.25, 
		  change: 7.3502,
		  volume: 59417381 
		},
		{ 
		  name: 'PLTR', 
		  company: 'Palantir Technologies Inc.', 
		  price: 82.38, 
		  change: 2.0944,
		  volume: 64888393 
		}
	  ];
	}
  };
  
  const getStockUpdates = async (
	callback: (stocks: StockData[]) => void,
	interval: number = 60000 
  ) => {
	const updateStocks = async () => {
	  const stocks = await getTopStocks();
	  callback(stocks);
	};
  
	await updateStocks();
	const intervalId = setInterval(updateStocks, interval);
	return () => clearInterval(intervalId);
  };
  
  export { getTopStocks, getStockUpdates, type StockData };