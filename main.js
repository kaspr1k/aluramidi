function tocaSom (idAudio) {
    document.querySelector(idAudio).play(); 
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const elementoAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(elementoAudio);
    }
    
    tecla.onkeydown = function (evento) {

        console.log(evento.code == 'Space')

        if (evento.code === 'Space' || evento.code === 'Enter') {
           tecla.classList.add('ativa');  
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


}
