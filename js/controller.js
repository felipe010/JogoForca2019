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
    }

    let inicia = function () {

        document.addEventListener('keydown', (event) => {
        if (event.which == 13) {            
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta()
                        break;
                    case 2:
                        leChute(entrada.value)                        
                        console.log(`Ganhou ${jogo.ganhou()}`);
                        console.log(`Perdeu ${jogo.perdeu()}`);
                        console.log(`Ganhou ou Perdeu ${jogo.ganhouOuPerdeu()}`);
                        break;
                }
            }
        });
    };
    return { inicia: inicia };
};