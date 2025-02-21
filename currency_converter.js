const axios = require('axios');

// Function to convert currency
const convertCurrency = async (amount, fromCurrency, toCurrency) => {
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  try {
    // Fetch exchange rates from the API
    const response = await axios.get(url);

    if (response.data.result === 'success') {
      const exchangeRate = response.data.conversion_rates[toCurrency];
      if (exchangeRate) {
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
      } else {
        console.log(`Error: Could not get the exchange rate for ${toCurrency}`);
      }
    } else {
      console.log('Error: Could not fetch exchange rates');
    }
  } catch (error) {
    console.error('Error fetching exchange rates:', error.message);
  }
};

// Example usage: Convert 100 USD to EUR
const amount = 100;
const fromCurrency = 'USD';
const toCurrency = 'EUR';

convertCurrency(amount, fromCurrency, toCurrency);
