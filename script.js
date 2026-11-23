const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');

    if (texto.trim() === "") {
        campoResultado.textContent = "Por favor, digite ou cole um texto antes de extrair.";
        return;
    }

    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = "Palavras-chave principais: " + palavrasChave.join(", ");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u).filter(Boolean);

    for (let i in palavras) {
        palavras[i] = palavras[i].toLowerCase();
    }

    const frequencias = contaFrequencias(palavras);

    let ordenadas = Object.keys(frequencias).sort(function (p1, p2) {
        return frequencias[p2] - frequencias[p1];
    });

    return ordenadas.slice(0, 10);
}

function contaFrequencias(palavras) {
    let frequencias = {};

    for (let palavra of palavras) {
        if (frequencias[palavra]) {
            frequencias[palavra]++;
        } else {
            frequencias[palavra] = 1;
        }
    }

    console.log("Frequência completa:", frequencias);
    return frequencias;
}
