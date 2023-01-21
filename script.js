const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const buttonToday = document.querySelector('#today')
const buttonDay = document.querySelector('#especificDay')

buttonToday.addEventListener('click', addToday)
buttonDay.addEventListener('click', addDay)
form.addEventListener('change', save)

function addToday() {
    const date = new Date().toLocaleDateString('pt-br').slice(0,-5)
    const dayExists = nlwSetup.dayExists(date)

    if (dayExists) {
        alert("Dia já incluso!")
        return
    }

    alert("Adicionado com sucesso!")
    nlwSetup.addDay(date)
}

function addDay() {
    const date = prompt("Digite o dia que você quer acrescentar! Formato: DD/MM")
    const dayExists = nlwSetup.dayExists(date)

    if (dayExists) {
        alert("Dia já incluso!")
        return
    }

    alert("Se a data informada for válida, foi adicionado!")
    nlwSetup.addDay(date)
}

function save() {
    localStorage.setItem('nlwSetup', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('nlwSetup')) || {}
nlwSetup.setData(data)
nlwSetup.load()