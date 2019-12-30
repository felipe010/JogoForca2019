let criaJogo = function (sprite) {
        
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

    let processaChute = function(chute) {
         let chuteTrim = chute.trim(),
             letra = chuteTrim.split("")[0],
             resultado,
             acertou = false;
        let exp = new RegExp(letra , 'gi');

        while (resultado = exp.exec(palavraSecreta)) {
            acertou = lacunas[resultado.index] = letra;   
        }
        if (!acertou) sprite.nextFrame();
    };

    let getLacunas = function () {
        return lacunas;
    }

    let getEtapa = function () {
        return etapaAtual
    }

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute
    }
}