// src/utils/pricingLogic.js

export const calculateQuote = (serviceType, details) => {
  const baseRates = {
    GST: 2000,
    LABOUR: 3000,
    PAYROLL: 2500,
  };

  let total = baseRates[serviceType] || 0;

  switch (serviceType) {
    case "GST":
      // Logic: Base + (Turnover multiplier) + (Invoice volume)
      const turnoverFactor = details.turnover > 50 ? details.turnover * 20 : 0;
      const invoiceFactor = details.invoices * 5;
      total += turnoverFactor + invoiceFactor;
      if (details.frequency === "Quarterly") total *= 0.8; // 20% discount for quarterly
      break;

    case "LABOUR":
      // Logic: Base + (Employee count * rate per head)
      total += details.employees * 150;
      break;

    case "PAYROLL":
      // Logic: Base + (Employee count * processing fee)
      total += details.employees * 100;
      if (details.isInternational) total += 5000;
      break;

    default:
      break;
  }

  return Math.round(total);
};