const form = document.querySelector(".mortgage-form");
const clearButton = document.querySelector(".mortgage-calculator__clear-button");

const resultsEmpty = document.querySelector(".mortgage-results--empty");
const resultsCompleted = document.querySelector(".mortgage-results--completed");

const monthlyValue = document.querySelector(".mortgage-results__value-repayments");
const totalValue = document.querySelector(".mortgage-results__value-total");

const inputs = {
  amount: document.getElementById("mortgage-amount"),
  term: document.getElementById("mortgage-term"),
  rate: document.getElementById("interest-rate"),
  repayment: document.getElementById("repayment"),
  interestOnly: document.getElementById("interest-only"),
};

function calcularHipoteca(amount, rate, term, isRepayment) {
  const monthlyRate = rate / 100 / 12;
  const totalMonths = term * 12;
  let monthlyPayment, totalPayment;

  if (isRepayment) {
    monthlyPayment =
      amount *
      (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    totalPayment = monthlyPayment * totalMonths;
  } else {
    monthlyPayment = amount * monthlyRate;
    totalPayment = monthlyPayment * totalMonths;
  }

  return { monthlyPayment, totalPayment };
}