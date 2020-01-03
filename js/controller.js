var criaController = function (jogo) {

    let entrada = document.getElementById('entrada');
    let lacunas = document.querySelector('.lacunas');

    let exibeLacunas = function () {
        lacunas.innerHTML = ""
        for (let index = 0; index < jogo.getLacunas().length; index++) {
            let li = document.createElement("li")
            li.classList.add("lacuna");
            li.innerHTML = jogo.getLacunas()[index];
            lacunas.appendChild(li);
        }
    };

    let mudaPlaceHolder = function (texto) {
        entrada.value = '';
        entrada.placeholder = texto;
    };

    let guardaPalavraSecreta = function () {
        jogo.setPalavraSecreta(entrada.value);
        mudaPlaceHolder("Insira um chute!")
        exibeLacunas();
    };

    let leChute = function (chute) {
        jogo.processaChute(chute)
        entrada.value = "";
        exibeLacunas()
        if (jogo.ganhouOuPerdeu() == true) {
            if (jogo.ganhou() == true) {
            alert("Você ganhou, meus parabéns!")
            }
            if (jogo.perdeu() == true) {
                alert("Você perdeu!")
            }
            jogo.reinicia();
            reinicia();
        }
    }

    let reinicia = function () {
        // limpa todas as lacunas
        lacunas.innerHTML = "";
        // volta para a mensagem da etapa 1
        mudaPlaceHolder('Palavra secreta');
        // solita ao jogo que reinicia 
        jogo.reinicia();
    };

    let inicia = function () {

        document.addEventListener('keydown', (event) => {
        if (event.which == 13) {            
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute(entrada.value);                      
                        break;
                }
            }
        });
    };
    return { inicia: inicia };
};