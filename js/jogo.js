let criaJogo = function () {
    
    let palavraSecreta = "";
    let etapaAtual = 1;
    let lacunas = [];
    
    let criaLacunas = function () {
        lacunas = Array(palavraSecreta.length).fill('');
    };

    let proximaEtapa = function () {
        etapaAtual++
    }

    let setPalavraSecreta = function(palavra) {
        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    }

    let getLacunas = function () {
        return lacunas;
    }

    let getEtapa = function () {
        return etapaAtual
    }

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa
    }
}