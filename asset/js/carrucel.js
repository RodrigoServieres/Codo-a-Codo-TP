window.onload = function () {
  
    const IMAGENES = [
        'https://media.gq.com.mx/photos/6126adce74eaa3b3b9a89ccf/16:9/w_2560%2Cc_limit/Reloj%2520rectangular%2520cover.jpg',
        'https://media.revistagq.com/photos/609e5424a845decdd92aeda0/16:9/w_2560%2Cc_limit/1-WBP201A-B-C.BA0632_STILLLIFE_2_FULL_RVB.jpg',
        'https://www.wryst-timepieces.com/img/cms/watch-wallpapers/automatic-swiss-watch.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1600;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

 
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }


    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }


    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    function stopIntervalo() {
        clearInterval(intervalo);
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);

    renderizarImagen();
} 