var criaController = function (jogo) {

    let entrada = document.getElementById('entrada');
    let lacunas = document.querySelector('.lacunas');

    let exibeLacunas = function () {
        for (let index = 0; index < entrada.value.length; index++) {
            let li = document.createElement("li")
            li.classList.add("lacuna")
            lacunas.appendChild(li)
        }
    };

    let mudaPlaceHolder = function (texto) {
        entrada.value = '';
        entrada.placeholder = texto;
    };

    let guardaPalavraSecreta = function () {
        jogo.setPalavraSecreta(entrada.value);
    };

    let inicia = function () {

        document.addEventListener('keydown', (event) => {
        if (event.which == 13) {            
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta()
                        exibeLacunas();
                        mudaPlaceHolder('Insira um chute');
                        break;
                    case 2:
                        jogo.processaChute(entrada.value)
                        entrada.value = ""
                        console.log(`Ganhou ${jogo.ganhou()}`);
                        console.log(`Perdeu ${jogo.perdeu()}`);
                        console.log(`Ganhou ou Perdeu ${jogo.ganhouOuPerdeu()}`);
                        console.log(jogo.getLacunas());
                        break;
                }
            }
        });
    };
    return { inicia: inicia };
};