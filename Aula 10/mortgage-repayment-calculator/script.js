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

  // Validação
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

clearButton.addEventListener("click", () => {
  form.reset();
  clearErrors();

  resultsCompleted.style.display = "none";
  resultsEmpty.style.display = "flex";
});

function showError(input, message) {
  input.classList.add("input--error");

  let error = document.createElement("small");
  error.classList.add("input__error-text");
  error.textContent = message;

  const field = input.closest(".mortgage-form__field");
  field.appendChild(error);
}

function showRadioError(message) {
  const fieldset = inputs.interestOnly.closest(".mortgage-form__field");
  let error = document.createElement("small");
  error.classList.add("input__error-text");
  error.textContent = message;
  fieldset.appendChild(error);
}

function clearErrors() {
  document
    .querySelectorAll(".input--error")
    .forEach((el) => el.classList.remove("input--error"));
  document.querySelectorAll(".input__error-text").forEach((el) => el.remove());
}

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