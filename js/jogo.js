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

    let ganhou = function () {
        if (lacunas.findIndex(e => e != "") == 0 && perdeu() == false) {
            return true
        }else{
            return false
        }
    };

    let perdeu = function () {
        let frame9 = document.getElementsByClassName('frame9');
        if (frame9.length == 1) {
            return true
        }
        return false
    };

    let ganhouOuPerdeu = function () {
        if (perdeu() || ganhou()) {
            return true;
        }
        return false
    };

    let reinicia = function () {
        etapaAtual = 1;
        palavraSecreta = '';
        lacunas = [];        
        sprite.reset();
    };

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu, 
        reinicia: reinicia
    }
}