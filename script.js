const botao = document.querySelector("#recovery");
botao.addEventListener("click" , () => {
    if(botao.value) {
        let p = document.createElement("p");
        p.textContent = `Acesse o link enviado para ${botao.value}`;
        let form = document.querySelector("#form-group");
        form.appendChild(p);
    }
})

function exibirHoraAtual() {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
  
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
  
    let horaAtual = hora + ":" + minutos + ":" + segundos;
    document.querySelector("#hora-atual").innerHTML = `Último acesso em ${horaAtual}`;
}
  
exibirHoraAtual();
  