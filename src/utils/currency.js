const USD_TO_INR = 83

export const toINR = (usd) => `₹${(usd * USD_TO_INR).toFixed(0)}`
