function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ``
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){ 
                //Criança
                img.setAttribute('src', 'homembebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }
                
        } else if (fsex[1].checked) {
            genero = 'Mulher'
             if (idade >= 0 && idade < 10){ 
                //Criança
                img.setAttribute('src', 'mulherbebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}