let numeros = []

function adicionar() {
    let num = document.getElementById('txtn')
    let n = Number(num.value)
    if (num.value === '') {
        return window.alert ('Você precisa digitar algum número')

    } if (num.value < 1 || num.value > 100){
        return window.alert ('Número fora do intervalo permitido (1 a 100)')

    } else { 
        if (numeros.indexOf(n) !== -1) {
            return window.alert('Número já adicionado!')
        }
        numeros.push(n)
        let item = document.createElement('option')
        item.text = n
        document.getElementById('selnum').appendChild(item)
        }
    }