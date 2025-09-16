// Cotação
const USD = 5.32
const AUD = 3.55
const EUR = 6.26
const JPY = 0.036
const GBP = 7.23

// capturando elementos do html
const form = document.getElementById("forms")
const amountValue = document.getElementById("amount")
const currencyOption = document.getElementById("currency")
const footer = document.querySelector("main > footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// manipulando o input amountValue para receber somente números
amountValue.addEventListener("input", () => {
  // captura caracteres e letras - exceto números - digitados pelo usuário
  const noDigits = /\D+/g

  // vai pegar o valor do input digitado pelo usuário e substituir o conteudo capturado pelo regex e substituir por nada/vazio
  amountValue.value = amountValue.value.replace(noDigits, "")
})

// capturando o evento de submit (enviar) do formulário
// noReload é um parametro criado para usar junto com o .preventDefault() que previne o comportamento padrão do submit
form.onsubmit = (noReload) => {
  noReload.preventDefault()
  console.log(currencyOption.value)

  switch (currencyOption.value) {
    case "USD":
      convertCurrency(amount.value, USD, "$")
      break
    case "AUD":
      convertCurrency(amount.value, AUD, "$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "JPY":
      convertCurrency(amount.value, JPY, "¥")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// função que converte o valor da moeda
function convertCurrency(amount, price, symbol) {
  try {
    // exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1,00 = ${formatCurrencyBRL(price)}`

    // calcula o valor total da moeda
    let total = amount * price
    total = formatCurrencyBRL(total)

    // exibe o resultado total da moeda
    result.textContent = `${total}`

    // adiciona a classe show-result ao elemento footer / mostra o resultado na tela
    footer.classList.add("show-result")
  } catch (err) {
    // remove a classe show-result ao elemento footer / esconde o resultado da tela
    footer.classList.remove("show-result")
    console.log(err)
    alert("Não foi possível converter")
  }
}

// formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
  // converte o valor para número para poder usar o .toLocaleString e formatar o valor para padrão brasileiro
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
