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
        if (!palavra.trim()) {
            throw Error('Palavra secreta inválida.')
        }
        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    }

    let processaChute = function(chute) {
        if (!chute.trim()) {
            throw Error('Chute inválido!')
        }
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
        return lacunas.length 
            ? !lacunas.some(function(lacuna) {
                return lacuna == '';
            })
            : false;
    };

    let perdeu = function () {
        return sprite.isFinished();
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