let criaJogo = function () {
    
    let palavraSecreta = "";
    let etapaAtual = 1;
    
    let setPalavraSecreta = function(palavra) {
        palavraSecreta = palavra;
        etapaAtual++
    }

    let getLacunas = function () {
        let arraylacunaslimpo = []
        let arrayLacunas = palavraSecreta.split("");
        arrayLacunas.forEach(element => {
            element = ""
            arraylacunaslimpo.push(element)
        });
        etapaAtual++
        return arraylacunaslimpo;
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