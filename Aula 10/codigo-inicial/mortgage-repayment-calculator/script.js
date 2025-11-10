const form = document.querySelector(".mortgage-form");
const clearButton = document.querySelector(
  ".mortgage-calculator__clear-button"
);

const resultsEmpty = document.querySelector(".mortgage-results--empty");
const resultsCompleted = document.querySelector(".mortgage-results--completed");

const monthlyValue = document.querySelector(
  ".mortgage-results__value-repayments"
);
const totalValue = document.querySelector(".mortgage-results__value-total");

const inputs = {
  amount: document.getElementById("mortgage-amount"),
  term: document.getElementById("mortgage-term"),
  rate: document.getElementById("interest-rate"),
  repayment: document.getElementById("repayment"),
  interestOnly: document.getElementById("interest-only"),
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  clearErrors(); 

  const amount = parseFloat(inputs.amount.value);
  const term = parseFloat(inputs.term.value);
  const rate = parseFloat(inputs.rate.value);
  const isRepayment = inputs.repayment.checked;
  const isInterestOnly = inputs.interestOnly.checked;

  let isValid = true;

  if (isNaN(amount) || amount <= 0) {
    showError(inputs.amount, "Insira um valor válido.");
    isValid = false;
  }
  if (isNaN(term) || term <= 0) {
    showError(inputs.term, "Insira um prazo válido (em anos).");
    isValid = false;
  }
  if (isNaN(rate) || rate <= 0) {
    showError(inputs.rate, "Insira uma taxa de juros válida.");
    isValid = false;
  }
  if (!isRepayment && !isInterestOnly) {
    showRadioError("Por favor selecione um tipo de hipoteca.");
    isValid = false;
  }

  if (!isValid) return;

  const { monthlyPayment, totalPayment } = calcularHipoteca(
    amount,
    rate,
    term,
    isRepayment
  );

  resultsEmpty.style.display = "none";
  resultsCompleted.style.display = "flex";

  monthlyValue.textContent = `R$ ${monthlyPayment.toFixed(2)}`;
  totalValue.textContent = `R$ ${totalPayment.toFixed(2)}`;
});

function calcularHipoteca(amount, rate, term, isRepayment) {
  const monthlyRate = rate / 100 / 12;
  const totalMonths = term * 12;
  let monthlyPayment, totalPayment;

  if (isRepayment) {
    monthlyPayment =
      (amount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    totalPayment = monthlyPayment * totalMonths;
  } else {
    monthlyPayment = amount * monthlyRate;
    totalPayment = monthlyPayment * totalMonths;
  }

  return { monthlyPayment, totalPayment };
}