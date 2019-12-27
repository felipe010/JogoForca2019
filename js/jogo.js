let criaJogo = function () {
    
    let palavraSecreta = "";
    let etapaAtual = 1;
    let lacunas = [];
    
    let criaLacunas = function () {
        let arrayLacunas = palavraSecreta.split("");
        arrayLacunas.forEach(element => {
            element = ""
            lacunas.push(element)
        });
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