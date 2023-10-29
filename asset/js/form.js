const form = document.getElementById('formulario');
const botonEnvio = document.getElementById('submit-btn');
const expresionRegularMail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

let errores = {
    nombre: true,
    mail: true,
    asunto: true,
    mensaje: true,
};

document.querySelectorAll('.consulta__caja').forEach(div =>{
    const divInput = div.querySelector('input');
        
    if (divInput) {
        divInput.addEventListener('blur', ()=>{
                console.log(`Input ${divInput.name} - valor:`, divInput.value);
                
                validar(div, divInput)
        })
    }
})

validar = (div, divInput) =>{
    //Validacion para que el campo no esté vacío
    if (divInput.value == ''){
        mostrarError(true, divInput, div)
    } else if (divInput.name == 'mail'){
        if (!divInput.value.match(expresionRegularMail)){
            mostrarError(true, divInput, div)
        } else {
            mostrarError(false, divInput, div)
        }
    } else {mostrarError(false, divInput, div)
    }

    controlEnvio();
}

mostrarError = (verificar, divInput, div) =>{
    let msjError = div.querySelector('p')
    if (verificar){
        divInput.classList.remove('valido')
        divInput.classList.add('invalido')
        msjError.classList.add('mostrar')
        errores[divInput.nombre] = true
    } else{
        divInput.classList.remove('invalido')
        divInput.classList.add('valido')
        msjError.classList.remove('mostrar')
        errores[divInput.name] = false
    }
}

controlEnvio = () => {
    if ((errores.nombre) || (errores.mail) || (errores.asunto) || (errores.mensaje)){
        botonEnvio.toggleAttribute('disabled', true)
    } else{
        botonEnvio.toggleAttribute('disabled', false)
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fromData = new FormData(event.target)
    console.log([...fromData])
})

