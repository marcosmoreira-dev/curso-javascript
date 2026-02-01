function carregar(){
    let msg = window.document.getElementById("msg")
    let img = document.getElementById("foto")
    let data = new Date()
    let hora = data.getHours ()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.background = '#493E2C'
    } else if (hora >=12 && hora <= 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FBC16F' 
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1C3136';
    }
}   
