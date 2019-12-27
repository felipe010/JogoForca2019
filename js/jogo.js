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
        let chuteTrim = chute.trim()
        let letra = chuteTrim.split("")[0]
        let arraySecreto = palavraSecreta.split("")
        if (arraySecreto.find(e => e == letra)) {
            let idx = arraySecreto.indexOf(letra)            
            while (idx != -1) {
                lacunas.splice(idx, 1, letra);
                idx = arraySecreto.indexOf(letra, idx + 1)   
            }
        } else {
            sprite.nextFrame();
        }
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