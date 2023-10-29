let get_provincias = document.getElementById("provincias");

let boton_resumen = document.getElementById("resumen");

let parrafo = document.getElementById("parrafo");

let items = "";

function mostrar() {


    get_provincias = document.getElementById("provincias")

    let provincias = get_provincias.options[get_provincias.selectedIndex].text


if (provincias == "Buenos Aires") {
    items = `<div>
                <h2 class="nombre-provincia">Buenos Aires</h2>
                <h3 class="direccion">Av. Corrientes 3247</h3>
                <div class="contenedor-mapa">
                    <iframe id="Buenos Aires" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0111257415183!2d-58.41356462514875!3d-34.603880172954185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8c854bd13f%3A0xfc0cf5c054da4aa1!2sAbasto%20Shopping!5e0!3m2!1ses!2sar!4v1698600111387!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
             </div>`
}

if (provincias == "Córdoba") {
    items = `<div>
                <h2 class="nombre-provincia">Córdoba</h2>
                <h3 class="direccion">Avenida Vélez Sarsfield esq. Bv. San Juan</h3>
                <div class="contenedor-mapa"> 
                    <iframe id="Córdoba" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.791117574251!2d-64.1908178253142!3d-31.419880674260124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a32dcf5d747f%3A0x40373220b29140ac!2sPatio%20Olmos%20Shopping!5e0!3m2!1ses!2sar!4v1698599940285!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
                </div>
             </div>`
}

if (provincias == "Ushuaia") {
    items = `<div>
                <h2 class="nombre-provincia">Ushuaia</h2>
                <h3 class="direccion">Calle Perito F P Moreno 1460</h3>
                <div class="contenedor-mapa"> 
                    <iframe id="Ushuaia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2299.8866708306164!2d-68.28161512380098!3d-54.79953507274623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4c22c1a3459183%3A0x727b08d1d8f260e8!2sPaseo%20del%20Fuego%20Shopping!5e0!3m2!1ses!2sar!4v1698600324855!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
             </div>`
}


parrafo.innerHTML = (items)


}



boton_resumen.addEventListener("click", mostrar)