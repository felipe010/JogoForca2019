var criaController = function (jogo) {

    var entrada = document.getElementById('entrada').value;
    var lacunas = document.getElementsByClassName('lacunas');


    var exibeLacunas = function () {
        console.log('falta implementar');
    };

    // muda o texto do placeHolder do campo de entrada    
    var mudaPlaceHolder = function (texto) {

        console.log('falta implementar');
    };

    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 
    var guardaPalavraSecreta = function () {

        console.log('falta implementar');
    };

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    var inicia = function () {

        document.addEventListener('keydown', (event) => {
        if (event.which == 13) {
            console.log('apertou o ENTER');
            
                switch (jogo.getEtapa()) {
                    case 1:
                        alert('etapa 1 - falta implementar');
                        break;
                    case 2:
                        alert('etapa 2 - falta implementar');
                        break;
                }
            }
        });
    };

    return { inicia: inicia };
};