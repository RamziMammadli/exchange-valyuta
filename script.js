const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const currency = document.querySelector('#currency')
const result = document.querySelector('#result')
const calculate = document.querySelector('#calculate')
const listOne = document.querySelector('#list-one')
const listTwo = document.querySelector('#list-two')

const apiKey = "bc041da558e5a7e4e67702a8"

const url = "https://v6.exchangerate-api.com/v6/" + apiKey


fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items = data.supported_codes

        let options;
        for(let item of items) {
            options += `<option value=${item[0]}></option>`
        }
        listOne.innerHTML = options
        listTwo.innerHTML = options
    })

calculate.addEventListener("click", function() {
    const firstCurrency = currencyOne.value
    const secondCurrency = currencyTwo.value
    const deyer = currency.value

    fetch(url + /latest/ + firstCurrency)
    .then(res=> res.json())
    .then(data =>{

        const hesablananDeyer = data.conversion_rates[secondCurrency] * deyer

        result.innerHTML = `${deyer} ${firstCurrency} = ${hesablananDeyer} ${secondCurrency}`
    })
})